#pragma once
#include <vector>
#include <opencv2/opencv.hpp>

const std::vector<std::vector<cv::Scalar>> colorPalette = {
    // Palette 1: Ocean Sunset
    {
        cv::Scalar(47, 91, 132),   // Dark blue
        cv::Scalar(106, 161, 182), // Teal
        cv::Scalar(240, 177, 97),  // Peach
        cv::Scalar(236, 104, 46),  // Orange
        cv::Scalar(220, 40, 55),   // Coral
        cv::Scalar(146, 41, 54),   // Maroon
        cv::Scalar(74, 33, 47),    // Dark purple
        cv::Scalar(38, 35, 61)     // Navy blue
    },
    // Palette 9: Ocean
    {
        cv::Scalar(0, 100, 143),   // Deep Blue
        cv::Scalar(0, 146, 199),   // Ocean Blue
        cv::Scalar(0, 191, 255),   // Sky Blue
        cv::Scalar(66, 170, 245),  // Light Blue
        cv::Scalar(143, 188, 187), // Seafoam Green
        cv::Scalar(204, 216, 176), // Light Green
        cv::Scalar(243, 235, 190), // Sand
        cv::Scalar(245, 245, 245)  // Light Gray
    },
    // Palette 11: Forest
    {
        cv::Scalar(30, 70, 30),    // Dark Green
        cv::Scalar(50, 120, 50),   // Green
        cv::Scalar(100, 200, 100), // Light Green
        cv::Scalar(130, 180, 130), // Olive Green
        cv::Scalar(200, 200, 100), // Yellow Green
        cv::Scalar(190, 120, 60),  // Brown
        cv::Scalar(220, 200, 190), // Light Brown
    },
    // Palette 3: Ocean
    {
        cv::Scalar(39, 62, 79),    // Dark Blue
        cv::Scalar(92, 147, 174),  // Light Blue
        cv::Scalar(151, 194, 212), // Blueish White
        cv::Scalar(50, 111, 141),  // Deep Teal
        cv::Scalar(63, 136, 143),  // Blue Green
        cv::Scalar(98, 164, 191),  // Powder Blue
        cv::Scalar(102, 137, 154), // Slate Blue
        cv::Scalar(139, 185, 215), // Sky Blue
        cv::Scalar(75, 103, 115),  // Blue Grey
        cv::Scalar(132, 176, 197), // Grey Blue
        cv::Scalar(43, 81, 94),    // Deep Blue
        cv::Scalar(79, 128, 151)   // Steel Blue
    },
    // Palette 2: Jewel Tones
    {
        cv::Scalar(128, 0, 0),     // Maroon
        cv::Scalar(255, 20, 147),  // Deep Pink
        cv::Scalar(0, 128, 128),   // Teal
        cv::Scalar(50, 205, 50),   // Lime Green
        cv::Scalar(218, 165, 32),  // Goldenrod
        cv::Scalar(106, 90, 205),  // Slate Blue
        cv::Scalar(220, 20, 60),   // Crimson
        cv::Scalar(139, 69, 19),   // Saddle Brown
        cv::Scalar(238, 130, 238), // Lavender Blush
        cv::Scalar(95, 158, 160),  // Cadet Blue
        cv::Scalar(240, 230, 140), // Khaki
        cv::Scalar(255, 215, 0)    // Gold
    },
    // Palette 5: Earth Tones
    {
        cv::Scalar(222, 184, 135), // Tan
        cv::Scalar(218, 165, 32),  // Goldenrod
        cv::Scalar(165, 42, 42),   // Brown
        cv::Scalar(139, 69, 19),   // Saddle Brown
        cv::Scalar(188, 143, 143), // Rosy Brown
        cv::Scalar(244, 164, 96),  // Sandy Brown
        cv::Scalar(205, 133, 63),  // Peru
        cv::Scalar(160, 82, 45),   // Sienna
        cv::Scalar(128, 128, 0),   // Olive
        cv::Scalar(128, 0, 0),     // Maroon
        cv::Scalar(139, 69, 19),   // Saddle Brown
        cv::Scalar(165, 42, 42)    // Brown
    },
    // Palette 6: Ocean
    {
        cv::Scalar(65, 105, 225),  // Royal Blue
        cv::Scalar(0, 191, 255),   // Deep Sky Blue
        cv::Scalar(0, 128, 128),   // Teal
        cv::Scalar(70, 130, 180),  // Steel Blue
        cv::Scalar(0, 139, 139),   // Dark Cyan
        cv::Scalar(46, 139, 87),   // Sea Green
        cv::Scalar(25, 25, 112),   // Midnight Blue
        cv::Scalar(0, 0, 205),     // Medium Blue
        cv::Scalar(176, 196, 222), // Light Steel Blue
        cv::Scalar(0, 191, 255),   // Deep Sky Blue
        cv::Scalar(30, 144, 255),  // Dodger Blue
        cv::Scalar(70, 130, 180)   // Steel Blue
    },
    {
        cv::Scalar(0, 0, 0),     // Black
        cv::Scalar(255, 0, 0),   // Red
        cv::Scalar(255, 165, 0), // Orange
        cv::Scalar(255, 255, 0), // Yellow
        cv::Scalar(0, 128, 0),   // Dark green
        cv::Scalar(0, 255, 0),   // Green
        cv::Scalar(0, 0, 255),   // Blue
        cv::Scalar(128, 0, 128)  // Purple
    },
    // Palette 4: Desert Dream
    {
        cv::Scalar(213, 144, 92),  // Tan
        cv::Scalar(228, 190, 128), // Khaki
        cv::Scalar(247, 228, 150), // Light yellow
        cv::Scalar(182, 209, 176), // Sage green
        cv::Scalar(144, 175, 152), // Green-gray
        cv::Scalar(197, 174, 148), // Beige
        cv::Scalar(207, 147, 120), // Rust
        cv::Scalar(123, 101, 97)   // Brown-gray
    },

    // Palette 8: Rainbow
    {
        cv::Scalar(255, 0, 0),    // Red
        cv::Scalar(255, 127, 0),  // Orange
        cv::Scalar(255, 255, 0),  // Yellow
        cv::Scalar(0, 255, 0),    // Green
        cv::Scalar(0, 0, 255),    // Blue
        cv::Scalar(75, 0, 130),   // Indigo
        cv::Scalar(143, 0, 255),  // Violet
        cv::Scalar(255, 255, 255) // White
    },

    // Palette 11: Forest
    {
        cv::Scalar(30, 70, 30),    // Dark Green
        cv::Scalar(50, 120, 50),   // Green
        cv::Scalar(100, 200, 100), // Light Green
        cv::Scalar(130, 180, 130), // Olive Green
        cv::Scalar(200, 200, 100), // Yellow Green
        cv::Scalar(190, 120, 60),  // Brown
        cv::Scalar(220, 200, 190), // Light Brown
    },
    {
        cv::Scalar{7, 5, 5},
        cv::Scalar{33, 25, 25},
        cv::Scalar{82, 58, 42},
        cv::Scalar{138, 107, 62},
        cv::Scalar{193, 156, 77},
        cv::Scalar{234, 219, 116},
        cv::Scalar{160, 179, 53},
        cv::Scalar{83, 124, 68},
        cv::Scalar{66, 60, 86},
        cv::Scalar{89, 111, 175},
        cv::Scalar{107, 185, 182},
        cv::Scalar{251, 250, 249},
        cv::Scalar{184, 170, 176},
        cv::Scalar{121, 112, 126},
        cv::Scalar{148, 91, 40},
    },
    {
        cv::Scalar{13, 43, 69},
        cv::Scalar{32, 60, 86},
        cv::Scalar{84, 78, 104},
        cv::Scalar{141, 105, 122},
        cv::Scalar{208, 129, 89},
        cv::Scalar{255, 170, 94},
        cv::Scalar{255, 212, 163},
        cv::Scalar{255, 236, 214},
    },
    {
        cv::Scalar{43, 15, 84},
        cv::Scalar{171, 31, 101},
        cv::Scalar{255, 79, 105},
        cv::Scalar{255, 247, 248},
        cv::Scalar{255, 129, 66},
        cv::Scalar{255, 218, 69},
        cv::Scalar{51, 104, 220},
        cv::Scalar{73, 231, 236},
    },
    {
        cv::Scalar{48, 0, 48},
        cv::Scalar{96, 40, 120},
        cv::Scalar{248, 144, 32},
        cv::Scalar{248, 240, 136},
    },
    {
        cv::Scalar{239, 26, 26},
        cv::Scalar{172, 23, 23},
        cv::Scalar{243, 216, 216},
        cv::Scalar{177, 139, 139},
        cv::Scalar{53, 52, 65},
        cv::Scalar{27, 26, 29},
    },
    {
        cv::Scalar{26, 28, 44},
        cv::Scalar{93, 39, 93},
        cv::Scalar{177, 62, 83},
        cv::Scalar{239, 125, 87},
        cv::Scalar{255, 205, 117},
        cv::Scalar{167, 240, 112},
        cv::Scalar{56, 183, 100},
        cv::Scalar{37, 113, 121},
        cv::Scalar{41, 54, 111},
        cv::Scalar{59, 93, 201},
        cv::Scalar{65, 166, 246},
        cv::Scalar{115, 239, 247},
        cv::Scalar{244, 244, 244},
        cv::Scalar{148, 176, 194},
        cv::Scalar{86, 108, 134},
        cv::Scalar{51, 60, 87},
    },
    {
        cv::Scalar{44, 33, 55},
        cv::Scalar{118, 68, 98},
        cv::Scalar{237, 180, 161},
        cv::Scalar{169, 104, 104},
    },
    {
        cv::Scalar{171, 97, 135},
        cv::Scalar{235, 198, 134},
        cv::Scalar{216, 232, 230},
        cv::Scalar{101, 219, 115},
        cv::Scalar{112, 157, 207},
        cv::Scalar{90, 104, 125},
        cv::Scalar{33, 30, 51},
    },
    {
        cv::Scalar{140, 143, 174},
        cv::Scalar{88, 69, 99},
        cv::Scalar{62, 33, 55},
        cv::Scalar{154, 99, 72},
        cv::Scalar{215, 155, 125},
        cv::Scalar{245, 237, 186},
        cv::Scalar{192, 199, 65},
        cv::Scalar{100, 125, 52},
        cv::Scalar{228, 148, 58},
        cv::Scalar{157, 48, 59},
        cv::Scalar{210, 100, 113},
        cv::Scalar{112, 55, 127},
        cv::Scalar{126, 196, 193},
        cv::Scalar{52, 133, 157},
        cv::Scalar{23, 67, 75},
        cv::Scalar{31, 14, 28},
    },
    {
        cv::Scalar{94, 96, 110},
        cv::Scalar{34, 52, 209},
        cv::Scalar{12, 126, 69},
        cv::Scalar{68, 170, 204},
        cv::Scalar{138, 54, 34},
        cv::Scalar{235, 138, 96},
        cv::Scalar{0, 0, 0},
        cv::Scalar{92, 46, 120},
        cv::Scalar{226, 61, 105},
        cv::Scalar{170, 92, 61},
        cv::Scalar{255, 217, 63},
        cv::Scalar{181, 181, 181},
        cv::Scalar{255, 255, 255},
    },
    {
        cv::Scalar{49, 31, 95},
        cv::Scalar{22, 135, 167},
        cv::Scalar{31, 213, 188},
        cv::Scalar{237, 255, 177},
    },
    {
        cv::Scalar{21, 25, 26},
        cv::Scalar{138, 76, 88},
        cv::Scalar{217, 98, 117},
        cv::Scalar{230, 184, 193},
        cv::Scalar{69, 107, 115},
        cv::Scalar{75, 151, 166},
        cv::Scalar{165, 189, 194},
        cv::Scalar{255, 245, 247},
    }};
