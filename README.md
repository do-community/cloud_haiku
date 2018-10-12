# Welcome to Cloud Haiku

Cloud Haiku is an open-source repository that collects haikus about the cloud and cloud technology and publishes these haikus to its website.

## [Haikus](https://do-community.github.io/cloud_haiku/haikus/)

All of our user-submitted **[haikus](https://do-community.github.io/cloud_haiku/haikus/)** are available via the [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) directory.

## Contributing

To contribute a haiku to this repository, read about submitting a pull request in the DigitalOcean tutorial "[How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)" and then compose a haiku in Markdown (`.md`).

You should name your Markdown file `your_haiku_title.md` and put it in the [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) directory of this project.

Because this is a [Jekyll](https://jekyllrb.com/) site, you'll also need to include some boilerplate at the top of the file:

```
---
layout: haiku
title:
author:
---
```

Keep the layout as `haiku`. Next to the `title:` put the title of your haiku. Next to the `author:` put your name (this can be just your first name or a pseudonym if you would like).

Under this heading, you'll put your haiku.

For example, Sammy the Shark's haiku is called "Octopus Cloud," and they wrote their name as just "Sammy." Sammy named their file [`octopus_cloud.md`](https://github.com/do-community/cloud_haiku/blob/master/_haikus/octopus_cloud.md).

```
---
layout: haiku
title: Octopus Cloud
author: Sammy
---

Distributed cloud  
Like the octopuses' minds  
Across the network  
```

To ensure that there are proper line breaks, you will need to put two blank spaces after each line of your haiku. Alternately, you can use HTML line breaks, like so:

```
---
layout: haiku
title: Octopus Cloud
author: Sammy
---

Distributed cloud<br>
Like the octopuses' minds<br>
Across the network<br>
```

Keep your haikus related to cloud infrastructure technology, and have fun contributing to this project!

![Sammy the Shark and other fish swimming](https://do-community.github.io/cloud_haiku/assets/swim.png)
