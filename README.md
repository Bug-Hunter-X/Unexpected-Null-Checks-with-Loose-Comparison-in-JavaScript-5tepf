# JavaScript Loose Comparison Bug

This repository demonstrates a common error in JavaScript related to loose comparison (==) when checking for null or undefined values.  The bug arises from the fact that JavaScript's loose comparison operator does not distinguish between different types of falsy values such as 0, "", and false. This can lead to unexpected behavior and errors.

## Bug Description
The `foo` function throws an error if either `a` or `b` is null.  However, due to the use of `==`, the function throws an error even if `a` or `b` are 0 or an empty string, which might be unexpected behavior.

## Solution
Using the strict equality operator (===) solves this issue.  Strict equality checks for both value and type, preventing accidental false positives when comparing null or undefined with falsy values.