# Red, Green, Refactor (or Test Driven Development)
This repo contains my work in practicing TDD for a recent algorithm programming exercise I started. I'm going through this process for two reasons:
1. I was curious about something and wanted to figure out the answer.
2. I thought it would be a good chance to practice some TDD.

### What's the Algorithm Behind Proper Urinal Etiquette?
I saw the video [Proper Urinal Etiquette](https://www.youtube.com/watch?v=tKnWd3JVnfE&t=36s) and enjoyed it's tongue-and-cheek treatment of a subject that is well known to those who utilize urinals. That is, "Which one do I use?" Or in other words: "How can I provide as much privacy for myself and the other people in the bathroom during the intimate process of elimination?"

Later, I realized that I didn't understand some of the underlying rules used to determin the suggestions for the more complex situations in the video, and I wondered if I could come up with a simple expression of the etiquette algorithm. With my interest in software, I thought trying to program the algorithm would be a fun way to arrive at the solution.

Because programming the algorithm would necessitate several iterations, it seemed like a natural fit for Test Driven Development. I've also been wanting to practice more TDD myself. I don't often use it on my personal projects because they tend to be one-off applications. While TDD offers many benefits, being able to validate software as it goes through different versions is one obvious one that's not utilized if the project doesn't change.

### My Process
I started writing tests for each example shown in the video. After each test, I added code to a function so that it would choose the correct urinal based on the situation given. After it passed the test, I refactored to organize, simplify, and explain the code better.

This process is known as Red, Green, Refactor because initially each test will fail - showing up red in many IDE's. After adding code to complete the task under test, the test should turn green. Likely, there will be something that can be improved about the code at this point and so it should be refactored.

### What I Hope to Gain
Besides getting a clear picture for the etiquette algorithm in the video - my initial curiousity - I'm trying to develop a habit of TDD through this project. Some things just need to be ingrained into muscle memory through repetition and I think the Red, Green, Refactor process is one of them.