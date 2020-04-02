export default `[input]
base_directory = "test/federalist"
surrounding_word_count = 12
files = [
    {path = "federalist-1.txt", url = "/federalist-1/", title = "Introduction"},
    {path = "federalist-2.txt", url = "/federalist-2/", title = "Concerning Dangers from Foreign Force and Influence"},
    ...
]

[output]
filename = "federalist.st"
debug = true`
