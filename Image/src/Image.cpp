#include "Image.hpp"
#include "ColorPalette.hpp"

Image::Image(int size, char **args)
{
  this->getArg(size, args);
  this->findPath(args[0]);
  this->src = cv::imread(this->path, cv::IMREAD_COLOR);
  if (this->src.empty())
  {
    throw "Could not load the image.";
  }
}

Image::~Image()
{
}

void Image::findPath(char *path)
{
  this->path = path;
  size_t location = this->path.find("build");
  std::string temp{""};
  for (size_t i = 0; i < location - 1; i++)
  {
    temp += path[i];
  }
  this->path = temp + "\\" + this->inputs["-fileName"];
}

void Image::getArg(int size, char **args)
{
  for (size_t i{1}; i < size - 1; i += 2)
  {
    this->inputs.insert(std::pair<std::string, std::string>(args[i], args[i + 1]));
  }
}

void Image::run()
{
  this->convertToPixelArt();
  if (this->inputs["-kmeans"] == "true")
  {
    this->kMeans();
  }
  if (this->inputs["-colorPalette"] == "true")
  {
    this->addColorPalette();
  }
  if (this->inputs["-grayScale"] == "true")
  {
    this->addGrayScale();
  }
  cv::imwrite("output.jpg", this->result);
}

void Image::resizeImage(cv::Mat &resize)
{
  cv::Size size(this->src.cols / std::stoi(this->inputs["-blockSize"]), this->src.rows / std::stoi(this->inputs["-blockSize"]));
  cv::resize(this->src, resize, size, 0, 0, std::stoi(this->inputs["-interIndex"])); // TODO INTER
}

void Image::convertToPixelArt()
{
  cv::Mat resized;
  this->resizeImage(resized);
  cv::resize(resized, this->result, this->src.size(), 0, 0, std::stoi(this->inputs["-interIndex"]));
}

void Image::kMeans()
{
  // Reshape the image to a matrix of samples
  // This block of code reshapes the input image src into a matrix of samples.
  // Each sample represents a single pixel in the image and contains the RGB values for that pixel.
  // The resulting matrix samples has a number of rows equal to the total number of pixels in the image
  // and a number of columns equal to 3, representing the RGB values.
  cv::Mat samples(this->result.rows * this->result.cols, 3, CV_32F);
  for (int y{0}; y < this->result.rows; y++)
  {
    for (int x{0}; x < this->result.cols; x++)
    {
      // Get the RGB values for the current pixel
      cv::Vec3b color{this->result.at<cv::Vec3b>(y, x)};
      // Store the RGB values in the samples matrix
      samples.at<float>(y + x * this->result.rows, 0) = color[0];
      samples.at<float>(y + x * this->result.rows, 1) = color[1];
      samples.at<float>(y + x * this->result.rows, 2) = color[2];
    }
  }

  // Apply K-means clustering
  // This block of code performs K-means clustering on the samples matrix.
  // The resulting clusters are stored in the labels matrix,
  // where each element represents the index of the cluster that the corresponding sample belongs to.
  // The cluster centers are stored in the centers matrix,
  // where each row represents the center of one of the K clusters.
  cv::Mat labels;
  cv::Mat centers;
  cv::kmeans(samples, std::stoi(this->inputs["-cluster"]), labels, cv::TermCriteria(cv::TermCriteria::EPS + cv::TermCriteria::COUNT, 10, 1.0), 3, cv::KMEANS_PP_CENTERS, centers);
  // Create the result image
  // This block of code creates the resulting image dst by assigning each pixel in the original image
  // to the closest cluster center, as determined by the labels matrix.
  // The RGB values for each cluster center are stored in the centers matrix.
  this->result = cv::Mat(this->result.size(), this->result.type());
  for (int y{0}; y < this->result.rows; y++)
  {
    for (int x{0}; x < this->result.cols; x++)
    {
      // Get the index of the closest cluster for the current pixel
      int clusterIdx{labels.at<int>(y + x * this->result.rows, 0)};
      // Assign the RGB values for the closest cluster center to the current pixel in the dst image
      this->result.at<cv::Vec3b>(y, x) = cv::Vec3b(centers.at<float>(clusterIdx, 0), centers.at<float>(clusterIdx, 1), centers.at<float>(clusterIdx, 2));
    }
  }
}

void Image::addColorPalette()
{
  for (int y{0}; y < this->result.rows; y++)
  {
    for (int x{0}; x < this->result.cols; x++)
    {
      cv::Vec3b pixel{this->result.at<cv::Vec3b>(y, x)};
      cv::Scalar color(pixel[2], pixel[1], pixel[0]);
      double minDistance{1e9};
      cv::Scalar closestColor;
      for (cv::Scalar paletteColor : colorPalette[std::stoi(this->inputs["-index"])])
      {
        double distance = cv::norm(color - paletteColor);
        if (distance < minDistance)
        {
          minDistance = distance;
          closestColor = paletteColor;
        }
      }
      this->result.at<cv::Vec3b>(y, x)[0] = closestColor[2];
      this->result.at<cv::Vec3b>(y, x)[1] = closestColor[1];
      this->result.at<cv::Vec3b>(y, x)[2] = closestColor[0];
    }
  }
}
void Image::addGrayScale()
{
  cv::cvtColor(this->result, this->result, cv::COLOR_BGR2GRAY);
}
