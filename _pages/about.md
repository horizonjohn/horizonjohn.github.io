---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


# About Me
I am a Master student under [Prof. Di Wu](http://robotics.hnu.edu.cn/info/1071/2109.htm). My research is focused on Deep Learning and its applications in Computer Vision.

In my previous research, my focus primarily revolved around leveraging AI tools to assist designers in enhancing their design processes. This involved tasks such as translating sketches into images, transferring styles from sketches to images, and implementing image retrieval based on fine-grained sketches. In my future work, I will explore the application and development of Diffusion Models in generative AI.

During my undergraduate period, I gained extensive experience in various engineering projects, with a focus on mechanical modeling analysis (SolidWorks and Ansys, etc.), as well as microcontroller development (Jetson Nano, Raspberry Pi and Stm32, etc.) and PCB design (Altium Designer). Additionally, I delved into web design (Vue.js), and engaged in object detection (YOLO and Faster-RCNN, etc.). In my freshman year, I joined the [Dean](https://iai.dhu.edu.cn/2021/0525/c20255a281050/page.htm)’s research group, participating in three research projects. The final project, spearheaded by me, yielded exceptional results. It broke the limits of foreign technology monopoly in the textile field, contributing to collaborative agreements with several industry-leading companies. Furthermore, I actively participated in various science and technology competitions and campus activities to enrich my academic experience and campus life as a whole.


<!--
My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=X1tytBsAAAAJ&hl=en'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
-->


# 🔥 News
- *Aug. 2024*: &nbsp;🎉🎉 Congratulations !!!

# 📝 Publications 
### 🪄 Papers
<!-- ########## Ubicomp 2024 ########## -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Ubicomp 2024</div><img src='images/Pub/Ubicomp2024_2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [HAIGEN: Towards Human-AI Collaboration for Facilitating Creativity and Style Generation in Fashion Design](None)

- <b>Jianan Jiang</b>, Di Wu, Hanhui Deng, Yidan Long, Wenyi Tang, Xiang Li, Can Liu, Zhanpeng Jin, Wenlei Zhang, Tangquan Qi

<!-- [**Github**](None) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>-->

- We introduce HAIGEN (<b>H</b>uman-<b>AI</b> Collaboration for <b>GEN</b>eration), an efficient fashion design system for Human-AI collaboration developed to aid designers.
</div>
</div>

<!-- ########## ECAI 2024 ########## -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECAI 2024</div><img src='images/Pub/ECAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [Simple Yet Efficient: Towards Self-Supervised FG-SBIR with Unified Sample Feature Alignment](None)

- <b>Jianan Jiang</b>, Di Wu, Zhilin Jiang, Weiren Yu

<!-- [**Github**](None) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>-->

- We introduce a framework that simultaneously promotes intra-sample and inter-sample feature alignment to improve the performance of FG-SBIR.
</div>
</div>

<!-- ########## Ubicomp 2024 ########## -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Ubicomp 2024</div><img src='images/Pub/Ubicomp2024_1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [CrossGAI: A Cross-Device Generative AI Framework for Collaborative Fashion Design](https://dl.acm.org/doi/10.1145/3643542)

- Hanhui Deng\*, <b>Jianan Jiang\*</b>, Zhiwang Yu, Jinhui Ouyang, Di Wu

<!-- [**Github**](None) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>-->

- We introduce a fashion design system, CrossGAI, that can support multiple designers to collaborate on different devices and provide AI-enhanced sketching assistance.
</div>
</div>

<!--# ########## CHI 2023 ########## -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CHI 2023</div><img src='images/Pub/CHI2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [StyleMe: Towards Intelligent Fashion Generation with Designer Style](https://dl.acm.org/doi/10.1145/3544548.3581377)

- Di Wu\*, Zhiwang Yu\*, Nan Ma\*, <b>Jianan Jiang</b>, Yuetian Wang, Guixiang Zhou, Hanhui Deng, Yi Li

<!-- [**Github**](None) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>-->

- We present an artificial intelligent aided fashion design system, namely StyleMe, to support the automatic generation of clothing sketches with designer style.
</div>
</div>


- <b>J. Jiang</b>, D. Wu, H. Deng, Y. Long, W. Tang, X. Li, C. Liu, Z. Jin, W. Zhang, T. Qi. “HAIGEN: Towards Human-AI Collaboration for Facilitating Creativity and Style Generation in Fashion Design.” Proceedings of the 2024 ACM International Joint Conference on Pervasive and Ubiquitous Computing (Ubicomp), 2024.
- <b>J. Jiang</b>, D. Wu, Z. Jiang, W. Yu. “Simple Yet Efficient: Towards Self-Supervised FG-SBIR with Unified Sample Feature Alignment.” 27th European Conference on Artificial Intelligence (ECAI), 2024.
- <b>J. Jiang</b>, X. Li, W. Yu, D. Wu. "HAIFIT: Human-Centered AI for Fashion Image Translation." arXiv preprint arXiv:2403.08651, 2024.
- H. Deng\*, <b>J. Jiang\*</b>, Z. Yu, J. Ouyang, D. Wu. "CrossGAI: A Cross-Device Generative AI Framework for Collaborative Fashion Design." Proceedings of the 2024 ACM International Joint Conference on Pervasive and Ubiquitous Computing (Ubicomp), 2024.
- D. Wu\*, Z. Yu\*, N. Ma\*, <b>J. Jiang</b>, Y. Wang, G. Zhou, H. Deng, Y. Li. "StyleMe: Towards Intelligent Fashion Generation with Designer Style." Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI), 2023.


### 🪄 CN Patent
- D. Wu, Z. Yu, <b>J. Jiang</b>, X. Li. "Intelligent Clothing Image Generation System with Designer Style." CN202211571187[P]. 2023-01-17.
- J. Zhang, J. Wang, <b>J. Jiang</b>, J. Guo, D. Li, H. Shen, J. Li, W. Wang, X. Xiao, F. Xu. "A spare yarn winding device for automatic joint of ring spinning yarn." CN202110398137[P]. 2021-11-05.
- J. Zhang, J. Wang, <b>J. Jiang</b>, J. Guo, D. Li, H. Shen, J. Li, W. Wang, X. Xiao, F. Xu. "A Robot End Actuator for Automatic Joint of Ring Spinning Yarn." CN202110398252[P]. 2021-07-27.
- J. Zhang, J. Wang, D. Li, J. Guo, <b>J. Jiang</b>, J. Li, W. Wang, X. Xiao, F. Xu, H. Shen. "An automatic joint device and method of ring spinning spinning yarn machine." CN202110398139[P]. 2021-07-27.


### 🪄 Software copyright
- 2021SR0953602. "A Robot automated production line big data application platform for the textile production process V1.0." 2021-05-15.
- 2021SR1280046. "A Cotton fiber flexible work robot scheduling cloud system V1.0.0." 2021-05-01.


# 📖 Educations
### 🪄 Master
- *Sep. 2022 - Jun. 2025 (now)* \| [Hunan University](http://www-en.hnu.edu.cn/), Changsha, China. Under [Prof. Di Wu](http://robotics.hnu.edu.cn/info/1071/2109.htm)
- *Sep. 2022 - Jun. 2025* \| Design Science (Direct Admission)


### 🪄 Undergraduate
- *Sep. 2018 - Jun. 2022* \| [Donghua University](https://english.dhu.edu.cn/), Shanghai, China. Under [Prof. Jie Zhang](https://iai.dhu.edu.cn/2021/0525/c20255a281050/page.htm) & [Dr. Junliang Wang](https://iai.dhu.edu.cn/2021/0525/c20256a281060/page.htm)
- *Sep. 2018 - Jun. 2022* \| Mechanical Engineering Excellence Class (Mechatronics Engineering)
- *Dec. 2019 - Jun. 2022* \| Intelligent Manufacturing and Robotics Experimental Class
- *Dec. 2020 - Jun. 2022* \| Artificial Intelligence Experimental Class


# 🏆 Selected Awards
- *Jun. 2022* \| <b>Shanghai Outstanding Graduates (5%)</b>
- *Mar. 2022* \| The 17th "Challenge Cup" National Undergraduate Extracurricular Academic Science and Technology Works Competition (Team Leader) (Top1 Competition), <b><i>National Second Prize</i></b>
- *May. 2021* \| The 17th "Challenge Cup" Shanghai Undergraduate Extracurricular Academic Science and Technology Works Competition (Team Leader), <b><i>Shanghai First Prize</i></b>
- *Dec. 2020* \| "Higher Education Cup" National College Students Mathematical Contest in Modeling, <b><i>Shanghai Third Prize</i></b>
- *Dec. 2020* \| The 10th Advanced Mapping Technology and Innovative Design Competition, <b><i>Shanghai Second Prize</i></b>
- *Oct. 2020* \| China Undergraduate Mechanical Engineering Innovation and Creativity Competition — The 4th China Intelligent Manufacturing Competition (Team Leader), <b><i>National Third Prize</i></b>
- *Nov. 2019* \| The 13th Honda China Energy-saving Competition (Fuel Group), <b><i>Nationwide 10th</i></b>
- *Nov. 2019* \| The 13th Honda China Energy-saving Competition (EV Group), <b><i>Nationwide 9th</i></b>
- *Oct. 2019* \| The "Hirschvogel Cup" Shanghai Undergraduate Creative Robot Challenge Competition (Team Leader), <b><i>Shanghai First Prize</i></b>
- *Aug. 2019* \| The 2019 "Robocup" China Robot Competition, <b><i>National Third Prize</i></b>
- *Nov. 2016* \| The 6th Educational Robot Competition in China, <b><i>National First Prize</i></b>


# 💻 Internships
- *Aug. 2023 - Dec. 2023* \| [Wondershare](https://www.wondershare.cn/), Changsha, China.


# 🎄 Others
- *Sep. 2020 - Jun. 2021* \| Buyue Automobile Technology Association, Donghua University, <b><i>President</i></b>
- *Sep. 2020 - Jun. 2021* \| School of Mechanical Engineering Student Union, Donghua University, <b><i>President</i></b>
- *Dec. 2019 - Jun. 2022* \| Intelligent Manufacturing and Robotics Experimental Class, Donghua University, <b><i>Monitor</i></b>
- *Dec. 2018 - Apr. 2021* \| Buyue Energy-saving Vehicle Team, Donghua University, <b><i>Leader</i></b>


# 🪪 CV
- My personal resume can be found at [CV](None) and [CV Chinese](None).

<br>
<br>


# 🌏

<div style="width: 66%; margin: 0 auto;">
<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=cPy2dvkwTmQc8rnzgxC_Lh6qc5QEz7iAHRj67MyBN3U&cl=ffffff&w=a"></script>
</div>

<br>
<br>


