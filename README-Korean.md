# Cloud Haiku에 어서오세요!

Cloud Haiku 는 클라우드 및 클라우드 기술에 대한 하이쿠(짧은 시) 를 수집하고 웹사이트에 게시하는 오픈소스 저장소입니다. 

---

> 10월의 주의사항:

* 헥토버페스트 기간동안 저장소의 인가가 많아져 관리자가 풀 리퀘스트를 검토하고 병합하는 데 시간이 걸릴 수 있음을 양해해 주세요. **리뷰는 수신된 순서대로 진행되고, 리뷰과정에서 변경 요청이 있을 수 있습니다**. 

* 관리자는 **한 차례의 리뷰만 수행합니다**. 만약 여러분의 풀 리퀘스트가 두 번째 리뷰에서 승인되지 않으면, 해당 풀 리퀘스트는 닫히고 유효성을 잃습니다. 

* 관리자를 멘션하는 행위는 오히려 프로세스가 지연될 수 있습니다.  **댓글은 풀 리퀘스트의 진행사항을 추적하는데 사용됩니다.**

## [Haikus](https://do-community.github.io/cloud_haiku/haikus/)

사용자가 제출한 모든 **[haikus](https://do-community.github.io/cloud_haiku/haikus/)** 는 [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) 디렉토리에서 확인 할 수 있습니다.

## 기여

이 저장소에 하이쿠를 기여하고 싶으시다면, DigitalOcean 에서 제공하는 "[How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)" 튜토리얼을 읽고 마크다운 형식 (`.md`) 으로 작성하여 주세요.

**Note: 헥토버페스트 기간동안은 이 저장소의 인기로 인해 각 사용자당 하나의 하이쿠만 기여 가능합니다.**

### 파일 이름과 위치

`your_haiku_title.md` 형식으로 마크다운 파일을 만들어 [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) 디렉토리에 위치시켜 주세요.

### Jekyll 포멧

[Jekyll](https://jekyllrb.com/) 를 사용할 것이므로, 파일의 상단에 다음과 같은 보일러플레이트를 추가해야 합니다. 

```yaml
---
layout: haiku
title:
author:
---
```

`layout` 은 `haiku` 로 설정하고, `title:` 에는 당신의 하이쿠 제목을, `author:` 에는 당신의 이름(단순히 이름이나 가명이 허용됨) 을 적어주세요.

이 포멧에 다른 것은 추가하지 말아주세요  

**Note**: 자동으로 Markdown 파일을 테스트하는 테스트를 사용하고 있습니다. 기여자가 테스트를 비활성화하면 유지 관리자가 추가 작업을 해야 하므로, README에 설명된 대로 Markdown 제목을 정확히 유지해 주세요.

이 헤딩 아래에 하이쿠를 작성하면 됩니다.

### 하이쿠 작성하기

오픈소스 정신에 입각하여 다른 사람의 시 보다 자신의 것을 창작하여 작성해 주시기 바랍니다.

여러분의 하이쿠는 재미있고, 쓸 때 도전적이어야 합니다. 다음 섹션에 있는 하이쿠의 시적 형식을 맞추어 작성하여야 합니다.

### Haiku Format

하이쿠는 세 줄로 구성되어 있으며 총 17 음절로 이루어진 전통적인 일본 시 형식입니다. 이 시는 세 줄에 걸쳐 각각 5-7-5 음절 형식을 따릅니다.

*음절* 일반적으로 모음을 포함하는 말소리의 조직 단위입니다. 예를 들어, **컴퓨터** 라는 단어는 **컴** - **퓨** - **터** 의 3음절로 이루어져 있습니다.

아래는 이 저장소에서 가져온 예제입니다.:

```
클라우드는<br>
문어의 마음처럼<br>
네트워크에<br>
```

위에서 우리는 하이쿠가 3줄로 구성되어 있음을 알 수 있습니다.

첫 번째 줄은 5 음절, 두 번째 줄은 7 음절, 세 번째 줄은 5 음절로 이루어져 있습니다.

```
클-라-우-드-는  # 5 음절  
문-어-의-마-음-처-럼  # 7 음절  
네-트-워-크-에  # 5 음절
```

정확한 음절 수 파악을 위해 [http://www.haikusyllablecounter.com](http://www.haikusyllablecounter.com) 와 같은 도구를 사용할 수 있습니다.

많은 시 형식에는 따라야 할 특정 미적 규칙이 있습니다. 이 도전은 시를 쓰는 것을 즐거운 예술 형태로 만듭니다.

### 줄 바꿈  

올바른 줄 바꿈을 보장하기 위해, HTML 의 줄 바꿈 태그를 사용하세요.

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

### 예

예를 들어, Sammy 라는 상어가 쓴 하이쿠는 "Octopus Cloud" 이고, 이름을 "Sammy" 라고 작성했습니다.  
Sammy 는 파일명을 [`octopus_cloud.md`](https://github.com/do-community/cloud_haiku/blob/master/_haikus/octopus_cloud.md) 로 지정했습니다.

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

### 풀 리퀘스트 제출

여러분의 풀 리퀘스트를 이 저장소에 병합할 수 있습니다! 위의 형식 지침을 따르는 모든 풀 리퀘스트는 이 프로젝트에 통합될 것입니다.

클라우드 인프라 기술과 관련된 하이쿠를 작성하고, 이 프로젝트에 기여하는 것을 즐기시면 됩니다!

![Sammy the Shark and other fish swimming](https://do-community.github.io/cloud_haiku/assets/swim.png)
