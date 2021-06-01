---
layout: post
title:  "Sales Card Generator"
date:   2021-05-07 20:10:06 +0200
categories: FR
---
## 1. Choose a template
(Skip if you want to <a href="#custom_template">use your own</a>.)
{% include dragonCardTemplates.html %}

## 2. Generate!
{% include dragonCardGenerator.html %}

## How to get a Dragon's source code
- <span id="source_code">As</span> good practice, it is recommended to be <dfn info="When logged in, the page will contain some of your information (username, bestiary status, currency etc.). That is not enough to comprimise your account and I am not setup to collect that, but, as good practice, be carefull with your information!">loged-out</dfn> of your account to do this. Opening a new icognito window will accomplish the same.<br>

![icognito](/assets/img/icognito.png){:class="img-responsive"}

Access the page of the dragon, right click and hit "view page source".

![page source](/assets/img/DragonViewPageSource.png){:class="img-responsive"}

A new window should appear. The bit needed should be between line **180** and line **810**, as shown below. If you are having trouble, **take the whole thing**.

![page source](/assets/img/code.png){:class="img-responsive" }

## How to use a custom template
<span id="custom_template">Coming</span> soon


<div style="text-align:center;">
<img src="https://cutekawaiiresources.files.wordpress.com/2014/08/small_divider.png">
</div>

<span style="font-size:12px;"> This tool does not collect any data from the text provided to create the cards. Generator source code can be found <a href="https://github.com/Dragonmim/Dragonmim.github.io/blob/master/_includes/dragonCardGenerator.html">here</a>.</span>