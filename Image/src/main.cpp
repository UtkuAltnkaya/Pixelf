#include <stdio.h>
#include <opencv2/opencv.hpp>
#include "Example.hpp"

using namespace cv;

int main(int argc, char **argv)
{

  Mat image;
  image = imread("C:\\Users\\utkua\\Desktop\\Utku\\VsCode\\c++\\Pixelf\\Image\\lenna.png");
  if (!image.data)
  {
    printf("No image data \n");
    return 1;
  }
  namedWindow("Display Image", WINDOW_AUTOSIZE);
  imshow("Display Image", image);
  waitKey(0);

  Example example{};

  return 0;
}