# pltsci-assignment
Project for interview with Platform Science

This is currently just using codeceptjs, and running against a localhost instance of the pltsci-sdet-assignment server


Steps
1. Start up a local instance of the hoover program by following the instructions here [pltsci-sdet-assignment](https://bitbucket.org/platformscience/pltsci-sdet-assignment/src/main/)
2. Clone this repo `git clone git@github.com:rlords/pltsci-assignment-tests.git`
3. Run the following commands:
  
  `npm install`

  `npx codeceptjs run --steps`


 # Test Report
## Introduction
This testing report details the results of testing the imaginary robotic hoover project. The vacuum starts with given room dimensions, starting point, patches that are dirty, and instructions on how to move through the room.

## Results
There are several bugs with the way the program is counting and keeping track of the number of patches that have been cleaned up. There were several times where my manual and automated tests received the wrong number of patches. I have several tests where I only move the hoover one space. These were reporting that an area was cleaned up when there were no patches at or around the starting point.

Found a bug where moving in certain directions when there was no patch on the starting point or end point still counted 1 patch

The program is hit or miss whether it will count a patch when you start on it. It will count if you move around and come back to the starting point. There appear to be certain coordinates where moving first in a certain directions will not count the patch, but other directions will.

Some other testing, I added no patches to the run. These tests returned some very concerning results. One test I just have the hoover going around in circles to the same points. Some how it claims there were multiple patches clean up. Another test where I randomly move around the room with no patches also exhibited the same behavior.

It also appears the program doesn’t handle the situation when the starting coordinates are out of bounds for the hoover. It allows the user to run the hoover out of bounds and actually goes through the instructions.
