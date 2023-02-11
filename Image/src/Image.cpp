#include "Image.hpp"

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
  cv::imshow("Result", this->result);
  cv::waitKey(0);
}

void Image::resizeImage(cv::Mat &resize)
{
  cv::Size size(this->src.cols / std::stoi(this->inputs["-blockSize"]), this->src.rows / std::stoi(this->inputs["-blockSize"]));
  cv::resize(this->src, resize, size, 0, 0, cv::INTER_NEAREST); // TODO INTER
}

void Image::convertToPixelArt()
{
  cv::Mat resized;
  resizeImage(resized);
  cv::resize(resized, this->result, src.size(), 0, 0, cv::INTER_NEAREST);
}
