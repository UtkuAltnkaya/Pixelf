#include "Image.hpp"

int main(int argc, char **argv)
{
  try
  {
    Image image{argc, argv};
    image.run();
  }
  catch (const char *err)
  {
    std::cerr << err << '\n';
  }
  return 0;
}

/*
void applyKMeans(Mat &src, Mat &dst, int k)
{
  // Reshape the image to a matrix of samples
  // This block of code reshapes the input image src into a matrix of samples.
  // Each sample represents a single pixel in the image and contains the RGB values for that pixel.
  // The resulting matrix samples has a number of rows equal to the total number of pixels in the image
  // and a number of columns equal to 3, representing the RGB values.
  Mat samples(src.rows * src.cols, 3, CV_32F);
  for (int y = 0; y < src.rows; y++)
  {
    for (int x = 0; x < src.cols; x++)
    {
      // Get the RGB values for the current pixel
      Vec3b color = src.at<Vec3b>(y, x);
      // Store the RGB values in the samples matrix
      samples.at<float>(y + x * src.rows, 0) = color[0];
      samples.at<float>(y + x * src.rows, 1) = color[1];
      samples.at<float>(y + x * src.rows, 2) = color[2];
    }
  }

  // Apply K-means clustering
  // This block of code performs K-means clustering on the samples matrix.
  // The resulting clusters are stored in the labels matrix,
  // where each element represents the index of the cluster that the corresponding sample belongs to.
  // The cluster centers are stored in the centers matrix,
  // where each row represents the center of one of the K clusters.
  Mat labels;
  Mat centers;
  kmeans(samples, k, labels, TermCriteria(TermCriteria::EPS + TermCriteria::COUNT, 10, 1.0), 3, KMEANS_PP_CENTERS, centers);
  // Create the result image
  // This block of code creates the resulting image dst by assigning each pixel in the original image
  // to the closest cluster center, as determined by the labels matrix.
  // The RGB values for each cluster center are stored in the centers matrix.
  dst = Mat(src.size(), src.type());
  for (int y = 0; y < src.rows; y++)
  {
    for (int x = 0; x < src.cols; x++)
    {
      // Get the index of the closest cluster for the current pixel
      int clusterIdx = labels.at<int>(y + x * src.rows, 0);
      // Assign the RGB values for the closest cluster center to the current pixel in the dst image
      dst.at<Vec3b>(y, x) = Vec3b(centers.at<float>(clusterIdx, 0), centers.at<float>(clusterIdx, 1), centers.at<float>(clusterIdx, 2));
    }
  }
}
*/
/*
void applyKMeans(Mat &src, Mat &dst, int k)
{
  // Reshape the image to a matrix of samples
  // Each row of the matrix "samples" will represent a pixel of the image.
  // The first column will store the B channel value, the second column will store the G channel value,
  // and the third column will store the R channel value.
  Mat samples(src.rows * src.cols, 3, CV_32F);
  for (int y = 0; y < src.rows; y++)
  {
    Vec3b src_row = src.ptr<Vec3b>(y);
    for (int x = 0; x < src.cols; x++)
    {
      Vec3b color = src_row[x];
      // Store the BGR values of the current pixel in the "samples" matrix.
      samples.at<float>(y + x * src.rows, 0) = color[0];
      samples.at<float>(y + x * src.rows, 1) = color[1];
      samples.at<float>(y + x * src.rows, 2) = color[2];
    }
  }

  // Apply K-means clustering
  // "labels" will store the cluster index for each pixel.
  // "centers" will store the mean color values for each cluster.
  Mat labels;
  Mat centers;
  // Use kmeans function to perform K-means clustering on the "samples" matrix.
  // "k" is the number of clusters.
  // The term criteria is set to stop the algorithm after 10 iterations or when the accuracy (EPS) reaches 1.0.
  // The number of attempts to find the optimal solution is set to 3.
  // The KMEANS_PP_CENTERS flag is used to specify that K-means++ method should be used for initializing the centers.
  kmeans(samples, k, labels, TermCriteria(TermCriteria::EPS + TermCriteria::COUNT, 10, 1.0), 3, KMEANS_PP_CENTERS, centers);

  // Create the result image
  dst = Mat(src.size(), src.type());
  for (int y = 0; y < src.rows; y++)
  {
    Vec3b *dst_row = dst.ptr<Vec3b>(y);
    for (int x = 0; x < src.cols; x++)
    {
      // Get the cluster index for the current pixel.
      int clusterIdx = labels.at<int>(y + x * src.rows, 0);
      // Set the BGR values of the current pixel in the "dst" matrix to the mean color of the cluster.
      dst_row[x] = Vec3b(centers.at<float>(clusterIdx, 0), centers.at<float>(clusterIdx, 1), centers.at<float>(clusterIdx, 2));
    }
  }
}
*/