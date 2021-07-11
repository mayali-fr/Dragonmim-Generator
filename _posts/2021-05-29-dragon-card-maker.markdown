---
layout: post
title:  "Sales Card Generator"
date:   2021-05-07 20:10:06 +0200
categories: FlightRising
---
## 1. Choose a template
(Skip if you want to <a href="#custom_template">use your own</a>.)
{% include dragonCardTemplates.html %}

## 2. Generate!
{% include dragonCardGenerator.html %}

## How to get a Dragon's input
- <span id="source_code">Copy</span> the area in your dragon page starting at it's name and ending at the eye type:

![page source](/assets/img/SelectDragon.gif){:class="img-responsive" }

## How to use a custom template
<span id="custom_template">Write</span> your bbcode as you normally would, but use these identifyers for the fields where you want to display dragon data. Keep in mind that some fields are intended to be used to make image urls, others to display as text, though you may use them as you like. 

<table class=post_table>
<tr class=title><td>Field</td> <td>Description</td> <td>Example <br><spam style="font-size:8pt;font-weight:normal">(from dragon above)</spam></td></tr>
<tr><td>{derg_id}</td> <td>Id</td> <td>68850406</td></tr>
<tr><td>{derg_id_fact}</td> <td>Id / 100 (mostly for image urls)</td> <td>688505</td></tr>
<tr><td>{name}</td> <td>Name</td> <td>Amaria</td></tr>
<tr><td>{gender}</td> <td>Gender (lowercase)</td> <td>female</td></tr>
<tr><td>{breed}</td> <td>Breed</td> <td>Skydance</td></tr>
<tr><td>{eye_type}</td> <td>Eye type</td> <td>Common</td></tr>
<tr><td>{flight}</td> <td>Flight</td> <td>Plague</td></tr>
<tr><td>{flight_low}</td> <td>Flight lowecase (mostly for image urls)</td> <td>plague</td></tr>
<tr><td>{price}</td> <td>Number input in "price" window.</td> <td>10.000</td></tr>
<tr class=separator><td> Genetics </td> <td> </td> <td>  </td></tr>
<tr><td>{primary_gene}</td> <td>Primary Gene</td> <td>Petals</td></tr>
<tr><td>{primary_color}</td> <td>Primary Color (name)</td> <td>Aqua</td></tr>
<tr><td>{primary_color_code}</td> <td>Primary Color (code)</td> <td>#72C4C4</td></tr>
<tr><td>{secondary_gene}</td> <td>Secondary Gene</td> <td>Buterfly</td></tr>
<tr><td>{secondary_color}</td> <td>Secondary Color (name)</td> <td>Aqua</td></tr>
<tr><td>{secondary_color_code}</td> <td>Secondary Color (code)</td> <td>#72C4C4</td></tr>
<tr><td>{tertiary_gene}</td> <td>Tertiary Gene</td> <td>Glimmer</td></tr>
<tr><td>{tertiary_color}</td> <td>Tertiary Color (name)</td> <td>Mint</td></tr>
<tr><td>{tertiary_color_code}</td> <td>Tertiary Color (code)</td> <td>#9AFFC7</td></tr>
</table>

You can use as many or as few as you wish. When your are done, paste your code in the "template" field. 

<br>

<div style="text-align:center;">
<img src="https://cutekawaiiresources.files.wordpress.com/2014/08/small_divider.png">
</div>

<br>

<p style="font-size:12px;text-align:center;"> This tool does not collect any data from the text provided to create the cards. Generator source code can be found <a href="https://github.com/Dragonmim/Dragonmim.github.io/blob/master/_includes/dragonCardGenerator.html">here</a>. <br> 
<a href="https://www1.flightrising.com/">Flight Rising</a> and related content © Stormlight Workshop LLC</p>
