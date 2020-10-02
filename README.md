# Welcome to Cloud Haiku

Cloud Haiku is an open-source repository that collects haikus about the cloud and cloud technology and publishes these haikus to its website.

**Due to the popularity of this repository during the celebration of Hacktoberfest, please respect the time it takes for the maintainers to review and merge pull requests. Please allow up to a week to receive a response, which may include a request for changes.**

## [Haikus](https://do-community.github.io/cloud_haiku/haikus/)

All of our user-submitted **[haikus](https://do-community.github.io/cloud_haiku/haikus/)** are available via the [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) directory.

## Contributing

To contribute a haiku to this repository, read about submitting a pull request in the DigitalOcean tutorial "[How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)" and then compose a haiku in Markdown (`.md`).

**Note: Due to the popularity of this repository, especially around Hacktoberfest, we will only accept one haiku contribution per user.**

### Filename and Location

You should name your Markdown file `your_haiku_title.md` and put it in the [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) directory of this project.

### Jekyll Format

Because this is a [Jekyll](https://jekyllrb.com/) site, you'll also need to include some boilerplate at the top of the file:

```yaml
---
layout: haiku
title:
author:
---
```

Keep the layout as `haiku`. Next to the `title:` put the title of your haiku. Next to the `author:` put your name (this can be just your first name or a pseudonym if you would like).

Please do not add any other lines to the above format.

**Note**: We are using Travis CI as a test suite to help us automatically test markdown files. While maintainers sometimes need to override the test suite, disabling it as a contributor will cause extra work for maintainers. Please keep your markdown heading to be exactly as is described above in order to ensure that your pull request will be merged.

Under this heading, you'll put your haiku.

### Writing a Haiku

In the spirit of open source, we would like you to write an original haiku rather than submit one that someone else has written.

Your haiku should be fun and challenging to write. You must ensure that it fits into the poetic guidelines of what a haiku is, which you can read about in the next section.

### Haiku Format

Haikus are a traditional form of Japanese poetry. They are made up of three lines and have a total of 17 syllables. These poems follow the 5-7-5 format of syllables across the three lines.

*Syllables* are a unit of organization for speech sounds that typically include a vowel. For example, the word **computer** is composed of three syllables: **com** - **put** - **er**.

Let's consider an example haiku from this repository:

```
Distributed cloud  <br>
Like the octopuses' minds  <br>
Across the network  <br>
```

Above, we see that the haiku is composed of 3 lines.

The first line is 5 syllables long, the second line is 7 syllables long, and the third line is 5 syllables long.

```
Dis-trib-ut-ed cloud  # 5 syllables  
Like the oc-to-pus-es' minds  # 7 syllables  
A-cross the net-work  # 5 syllables  
```

In order to verify that you're using the right number of syllables, you can use a tool such as [http://www.haikusyllablecounter.com](http://www.haikusyllablecounter.com).

Many forms of poetry have specific aesthetic rules to follow. This challenge makes writing poetry an enjoyable art form.

### Line Breaks

To ensure that there are proper line breaks, please use HTML line breaks, like so:

```markdown
---
layout: haiku
title: Octopus Cloud
author: Sammy
---

Distributed cloud<br>
Like the octopuses' minds<br>
Across the network<br>
```

### An Example

For example, Sammy the Shark's haiku is called "Octopus Cloud", and they wrote their name as just "Sammy". Sammy named their file [`octopus_cloud.md`](https://github.com/do-community/cloud_haiku/blob/master/_haikus/octopus_cloud.md).

```markdown
---
layout: haiku
title: Octopus Cloud
author: Sammy
---

Distributed cloud<br>
Like the octopuses' minds<br>
Across the network<br>
```

### Testing

This repository includes a test script that will be run on every pull request. To run the tests locally, you'll need Node.js installed. You should then be able to install the dependencies and run the tests.

First clone the repo, if you haven't done so already:

```shell
$ git clone https://github.com/do-community/cloud_haiku.git
```

Then change into the new directory and install the dependencies with `npm`:

```shell
$ cd cloud_haiku
$ npm install
```

Finally, run the tests:

```shell
$ npm test
```

Note that due to the "creativity" of the English language it's possible for the syllable counting library to be off. If your pull request fails a test and you think that's in error, please follow up with a comment.

### Submit a Pull Request

We're happy to merge valid pull requests to this repository! Any pull request that follows the formatting guidelines above will be brought into this project.

Keep your haikus related to cloud infrastructure technology, and have fun contributing to this project!

![Sammy the Shark and other fish swimming](https://do-community.github.io/cloud_haiku/assets/swim.png)
