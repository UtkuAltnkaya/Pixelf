#pragma once

#include <string>
#include <opencv2/opencv.hpp>
#include <map>

class Image
{
private:
  std::string path;
  std::map<std::string, std::string> inputs;
  cv::Mat src;

  void findPath(char *path);
  void getArg(int size, char **args);
  void resizeImage(cv::Mat &resize);
  void convertToPixelArt();
  void kMeans();
  void addColorPalette();
  void addGrayScale();

public:
  cv::Mat result;
  Image(int size, char **args);
  ~Image();
  void run();
};
