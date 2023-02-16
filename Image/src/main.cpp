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
