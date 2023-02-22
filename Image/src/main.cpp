#include "Image.hpp"

int main(int argc, char **argv)
{
  try
  {
    Image image{argc, argv}; // determining the size and args and calling the constructor
    image.run();
  }
  catch (const char *err)
  {
    std::cerr << err << '\n';
  }
  return 0;
}
