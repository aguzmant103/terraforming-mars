<p align="center">
  <img src="https://cdn1.epicgames.com/spt-assets/5199b206e46947ebad5e5c282e95776f/terraforming-mars-offer-1j70f.jpg?h=270&resize=1&w=480" alt="Terraforming Mars"/>
</p>

# Terraforming Mars

Terraforming Mars is a game by Jacob Fryxelius. In Terraforming Mars, you control a corporation, and you buy and play cards describing different projects.

The projects often directly or indirectly contribute to the terraforming process, but can also consist of business enterprises of different kinds. In order to win, you have to accumulate a good terraform rating (TR) and many victory points (VPs). Your TR is increased each time you raise a global parameter (temperature, oxygen or ocean).

## This implementation

This implementation of Terraforming Mars is built using OOP in Typescript as part of Object Oriented Programming course.

## How to run me
1. Change directory to the main "terraforming-mars" folder.
2. Run 'node tests.js'
3. Experiment by toggling the different console elements.

## Out of Scope
The following features have being deliveratively left out from implementation from the original game:
- Tags, Awards, Actions, Milestones
- Whole card deck, Corporations
- Visualizing board map and adding/removing objects from it.

## Example Implementation and Concepts
To exemplify the usage of different OOP concepts, the following list was compiled with examples:

##### Basic elements:
- [X] Static Types "./resources.ts" Line 17
- [X] Type Aliases "./cards.ts" Line 14, Line 16
- [X] Destructuring "./players.ts" Line 116, Line 126
- [X] For...in Loops "./gameEngine.ts" Line 80
- [X] For...of Loops "./player.ts" Line 102, Line 124, Line 135

##### More elements:
- [X] Classes "./logs.ts" Line 4, Line 45, Line 61
- [X] Usage of static property "./terraform.ts" Line 17
- [X] Class inheritance "./objects.ts" Lines 79, Line 100, Line 120
- [X] Usage of private and not exportable methods "./logs.ts" Line 74, Line 82


##### Usage of data structures and advanced elements
- [X] Stack "./logs.ts" Line 5
- [X] LinkedList "./gameEngine.ts" Line 14, Line 27
- [X] Generics - Polymorphism in parametric polymorphism "./logs.ts" Line 5

##### Usage of Design Patterns:
- [X] Façade Pattern "./terraform.ts" Line 7
- [X] Factory Pattern "./terraform.ts" Line 150
- [X] Builder Pattern "./player.ts" Line 71

##### Usage of principles and concepts:
- [X] SOLID "Across the application"

##### Organization:
- [X] Index: can be found under "terraform_files/index.ts"
- [X] Single folder: can be found under the folder "terraform_files"
- [X] Export modules and use local modules "This is used accross all modules"

##### Documentation:
- [X] Add one line per method
- [X] Except terribly basic (1-2 lines of code)

##### Style:
- [X] Usage of TSList

##### ReadMe
- [X] Here explains the background, list of elements looked, and how to run it.

##### Specifications:
- [X] Multiple independent instances of Game "./test" Line 14
- [X] Use of Readonly "./objects" Line 80, 81, 82... and many other places
- [X] Game show data - "Methods like Game.getGlobalParameters, getAllLogs, printBoard, etc"
- [X] Prevent illegal actions! - "Tested as much as possible"
- [X] Don't use classes for small things
- [X] Basic structure types to be more specific with input parameters. "./cards.ts" Line 14
- [X] Game has sole responsibility for action execution and/or information exposure instead of sub-components. 