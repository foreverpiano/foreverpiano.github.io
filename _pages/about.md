---
permalink: /
title: "Hangliang Ding"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<h2 class="col">
<font color=blue>About Me</font>
</h2>

Hey there! I’m Hangliang Ding, fourth year undergraduate student at <a href="https://www.tsinghua.edu.cn/">Tsinghua University</a>. I am very fortunate to be advised by <a href="https://cseweb.ucsd.edu/~haozhang/">Hao Zhang</a>(UCSD), <a href="https://minjiazhang.github.io/">Minjia Zhang</a>(UIUC) and <a href="http://keg.cs.tsinghua.edu.cn/jietang">Jie Tang</a>(THU) in the past.

My research interests focus on building **efficient** and **reliable** ML systems through system and algorithm co-design, focusing on efficiency, reliability, and scalability. Also,  I aim to explore real-world applications, making these systems truly impactful and accessible for humans. Recently, I am actively looking into (M)LLM / Diffusion model efficiency challenges and system bottlenecks.

I'm always excited to exchange ideas and collaborate on research! Whether you have questions about my work or want to explore potential collaborations, please do not hesitate to contact me via email at any time.


Email me at <a href="mailto:pianoqwz@gmail.com" style="color: #52ADC8; text-decoration: none; border-bottom: 1px solid #52ADC8;">pianoqwz@gmail.com</a>.

<h2 class="col">
<font color=blue>News</font>
</h2>

- 2024-12 Release <a href="https://github.com/hao-ai-lab/FastVideo" style="color: #52ADC8; text-decoration: underline;">FastVideo</a> the first open-source distillation recipes for video DiT.

- 2024-11 Release <a href="https://arxiv.org/abs/2411.18077" style="color: #52ADC8; text-decoration: underline;">MiniKV</a> on the arxiv, an efficient 2-Bit layerwise KV cache compression framework.

<h2 class="col">
<font color=blue>Academic Experiences</font>
</h2>

<div style="display: flex; align-items: center;">

<div style="flex-shrink: 0; margin-right: 20px;">

<img src="../images/vdit.png" alt="Efficient-vDiT Illustration" style="max-width: 300px;">

</div>

<div>

<h3 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">

Efficient-vDiT: Efficient Video Diffusion Transformers With Attention Tile

</h3>

<div style="font-size: 14px; margin-bottom: 10px;">

<b>H. Ding</b>*, D. Li*, R. Su, Z. Deng, I. Stoica, H. Zhang

</div>

<div style="font-size: 14px; margin-bottom: 10px;">

We discover <b><i>Attention Tile</i></b>   pattern in 3D-DiT and develop an efficient video diffusion pipeline that achieves 7.8× speedup on single GPU through consistency distillation and layer-wise profiling, with only 1% pretraining FLOP.

</div>

</div>

</div>

<div style="display: flex; align-items: center;">

<div style="flex-shrink: 0; margin-right: 20px;">

<img src="../images/minikv.png" alt="MiniKV Illustration" style="max-width: 300px;">

</div>

<div>

<h3 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">

MiniKV: 2-Bit Layer-Discriminative KV Cache Compression

</h3>

<div style="font-size: 14px; margin-bottom: 10px;">

A. Sharma, <b>H. Ding</b>, J. Li, D. Neel, M. Zhang

</div>

<div style="font-size: 14px; margin-bottom: 10px;">

<b>MiniKV</b> introduces a layer-discriminative framework that achieves 86% KV cache compression using 2-bit quantization and specialized CUDA flash-attention kernels, while maintaining 98.5% accuracy.

</div>

<div style="font-size: 14px; margin-top: 10px;">


<a href="https://arxiv.org/abs/2411.18077" style="text-decoration: none; color: #52ADC8;">Arxiv</a> available.

</div>

</div>

</div>

<h2 class="col">
<font color=blue>Open-source Project</font>
</h2>

<div class="section-text col-right">
<h3><a href="#" style="text-decoration: none;"><span class="emph">FastVideo: Accelerate Video Diffusion Model Generation</span></a></h3>
</div>

<ul>
    <li>Project: <a href="https://github.com/hao-ai-lab/FastVideo" style="color: #52ADC8; text-decoration: underline;">FastVideo</a>, <img src="https://img.shields.io/github/stars/hao-ai-lab/FastVideo?style=social" alt="AgentBench stars">
    <li> First open distillation recipes for video DiT and support distilling and finetuning for state-of-the-art open video DiTs. </li>
    <li> Scalable training with FSDP, sequence parallelism, and selective activation checkpointing, with near linear scaling to 64 GPUs.</li>
    <li> Memory efficient finetuning with LoRA, precomputed latent, and precomputed text embeddings.</li>
    </li>
</ul>

<div class="section-text col-right">
<h3><a href="#" style="text-decoration: none;"><span class="emph">AgentBench: Evaluating LLMs as Agents</span></a></h3>
</div>

<div><a style="text-decoration: none;">@Zhipu AI</a>
<font size ="2"> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Beijing, China; March 2023 - Jan. 2024</font>


<ul>
    <li>Project: <a href="https://github.com/THUDM/AgentBench" style="color: #52ADC8; text-decoration: underline;">AgentBench</a>, <strong>ICLR 2024</strong>, <img src="https://img.shields.io/github/stars/THUDM/Agentbench?style=social" alt="AgentBench stars">
    <li>Classify real-world browsing options and design auto-collected browsing traces data framework, building a more efficient language model-driven automated web navigation agent.</li>
    </li>
</ul>

<h2 class="col">
<font color=blue>Hobbies</font>
</h2>

<ul>
    <li>Guitar. I am the lead guitarist of Susu (素数), a math rock band active in Beijing. Check out our recent <a href="https://www.bilibili.com/video/BV1Lqi6YqExg/" style="color: #52ADC8; text-decoration: underline;">live performance</a> at Susu Lab.</li>
    <li>Pingong. I am a member and referee of our department's ping pong team.</li>
</ul>