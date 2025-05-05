# Effodio Live Testing Challenge
I've not included the description of the coding challenge because I don't have access to the specific document, and I also don't want to reveal the details to others as this repo is public.

## Solution
Quick note, I did not include a solution to the last step in the challenge which, if I recall, was about adding a labelName when it was missing for a given valid labelValue because I don't have access to the specifics of the challenge anymore. The part of the challenge I've addressed here is the data parsing portion.

My solution solves for the given test data, but I suspect there are some edge cases that would fail. With more time I'd develop a large set of test data and write some unit tests for the solution I developed.

## Feedback
The intent of the coding challenge was for the solution to be workable in the language of the candidates choosing. I chose JS and after working the problem I realized it's not a great language for solving this particular challenge. The first major hurdle involved resolving different legacy data types that include Json objects, String Arrays, Tuples, and more. JavaScript is not a strongly typed language and coercing it try and identify if the incoming data is of a particular structure requires more proficiency with the language than a strongly typed language such as Java or C#. Therefore, my feedback is that if the goal is to be language agnostic, the problem may not be a good fit.
