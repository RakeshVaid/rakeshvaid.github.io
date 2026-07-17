const PORTFOLIO_DATA = {
    name: "Rakesh Vaideeswaran",
    role: "Applied Scientist II &middot; Amazon AGI",
    email: "rakeshvaideeswaran.nitt@gmail.com",
    footer: 'Built with <a href="https://code.claude.com/docs/en/overview" target="_blank">Claude Code</a> · Last updated July 2026',
    links: {
        scholar: "https://scholar.google.com/citations?user=r8i2rq8AAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/rakeshmahesh/",
        wca: "https://www.worldcubeassociation.org/persons/2012VAID02",
        cv: "CV.pdf"
    },
    sections: [
        {
            id: "about",
            number: "01",
            label: "About",
            title: "Who I am",
            color: "white",
            face: 2,
            content: {
                type: "text",
                paragraphs: [
                    'I\'m an Applied Scientist II on the Amazon AGI team, building large-scale multimodal foundation models: systems that see, read, reason, and generate across modalities. I am a core contributor to <strong>Amazon Nova family of Foundation Models</strong> (<strong><a href="https://www.amazon.science/publications/the-amazon-nova-family-of-models-technical-report-and-model-card" target="_blank">Nova 1 Family</a>; <a href="https://www.amazon.science/publications/amazon-nova-2-multimodal-reasoning-and-generation-models" target="_blank">Nova 2 Family</a></strong>).',
                    'I earned my Master\'s in ECE from UIUC, explored multilingual speech recognition problems at IISc Bangalore, and shipped fraud detection systems at Discover Financial Services.',
                    'Beyond my work in AI, I\'m also a competitive speedcuber: one of the few who can solve a 3x3 in <a href="https://www.worldcubeassociation.org/persons/2012VAID02" target="_blank">under 10 seconds</a>.',
                    'Over the years, I\'ve shared this passion with many by teaching them how to solve the cube. Turns out, the cube teaches far more than just bringing six colors together. Curious what I mean? My friend and fellow speedcuber <a href="https://www.worldcubeassociation.org/persons/2011NARA02" target="_blank">Dr. Bhargav Narasimhan</a> captures it well in <a href="https://www.cubelelo.com/blogs/cubing/why-should-you-cube" target="_blank">this piece</a>.',
                    'The cube has been a constant in how I think about problem decomposition, pattern recognition, and the discipline of optimizing one algorithm at a time.',
                    '<em>"It always seems impossible until it\'s done."</em>'
                ]
            }
        },
        {
            id: "news",
            number: "02",
            label: "News",
            title: "What's recent",
            color: "green",
            face: 4,
            content: {
                type: "timeline",
                items: [
                    { date: "July 2026", text: 'Project <a href="https://openreview.net/pdf?id=SJykq9Kdt6" target="_blank">Stress Tests REVEAL Fragile Temporal and Visual Grounding in Video-Language Models</a> accepted at two workshops at ICML 2026 – <a href="https://sites.google.com/view/icml-ctb/home" target="_blank">1) Combining Theory and Benchmarks</a>, <a href="https://mechinterpworkshop.com/" target="_blank">2) Mechanistic Interpretability workshop</a>' },
                    { date: "May 2026", text: 'Reviewer, <a href="https://sites.google.com/view/icml-ctb/home" target="_blank">CTB@ICML</a> & <a href="https://mechinterpworkshop.com/" target="_blank">Mechanistic Interpretability Workshop@ICML</a>' },
                    { date: "Dec 2025", text: 'Launched <a href="https://www.amazon.science/publications/amazon-nova-2-multimodal-reasoning-and-generation-models" target="_blank">Amazon Nova 2: Multimodal reasoning and generation models</a> (Nova 2 - Lite, Pro, Omni, Sonic)' },
                    { date: "Sep 2025", text: 'Reviewer, <a href="https://aaai.org/conference/aaai/aaai-26/" target="_blank">AAAI 2026</a>' },
                    { date: "May 2025", text: 'Launched <a href="https://www.amazon.science/publications/amazon-nova-premier-technical-report-and-model-card" target="_blank">Amazon Nova Premier</a>, our most capable multimodal foundation model and teacher model for distillation' },
                    { date: "Apr 2025", text: 'Promoted to Applied Scientist II at Amazon AGI' },
                    { date: "Dec 2024", text: 'Launched the <a href="https://www.amazon.science/publications/the-amazon-nova-family-of-models-technical-report-and-model-card" target="_blank">Amazon Nova Family of Foundation Models</a>' },
                    { date: "Dec 2023", text: 'Joined Amazon AGI as Applied Scientist' },
                    { date: "Aug 2023", text: 'Project <a href="https://spire.ee.iisc.ac.in/assets/PDFs/papers_pdf/Can_the_decoded_text_from_automatic_speech_recognition_effectively_detect_spoken_grammar_errors.pdf" target="_blank">"Can the decoded text from automatic speech recognition effectively detect spoken grammar errors?"</a> accepted at SLaTE workshop, Interspeech 2023'},
                    { date: "Feb 2023", text: 'Joined the Fraud Strategy Team at Discover Financial Services as a Senior Data Scientist'},
                    { date: "Dec 2022", text: 'Completed Master\'s in ECE from UIUC' },
                    { date: "Oct 2022", text: '<a href="https://arxiv.org/pdf/2211.05190" target="_blank">"Towards Reasoning Aware Explainable VQA"</a> accepted at TSRML workshop, NeurIPS 2022'},
                    { date: "May 2022", text: 'Applied Scientist Intern at Amazon Alexa AI' },
                    { date: "Oct 2021", text: 'Project <a href="https://arxiv.org/pdf/2112.04151" target="_blank">"A study on native American English speech recognition by Indian listeners with varying word familiarity level"</a> accepted at O-COCOSDA 2021'},
                    { date: "Aug 2021", text: 'Started Master\'s in ECE (Machine Learning, Signal Processing) at UIUC' },
                    { date: "Jul 2021", text: 'Project <a href="https://www.isca-archive.org/interspeech_2021/diwan21_interspeech.pdf" target="_blank">"MUCS 2021"</a> accepted at Interspeech 2021' },
                    { date: "Jul 2020", text: 'Junior Research Fellow at <a href="https://spire.ee.iisc.ac.in/" target="_blank">SPIRE Lab</a>, IISc Bangalore' },
                    { date: "May 2019", text: '<a href="https://www.mitacs.ca/our-programs/globalink-research-award/" target="_blank">Mitacs Globalink</a> Research Scholar at UNB, Canada' },
                    { date: "Apr 2019", text: 'Project <a href="https://ieeexplore.ieee.org/document/8933285" target="_blank">"ILocUS"</a> accepted at IMICPW Conference, 2019' }
                ]
            }
        },
        {
            id: "experience",
            number: "03",
            label: "Experience",
            title: "Where I've been",
            color: "orange",
            face: 1,
            content: {
                type: "experience",
                intro: "I have been involved in multiple research projects, with collaborations across both industry and academia. My prior work spans multiple research areas including Multimodal Foundation Model Training & Evaluation, Image-Text understanding, Natural Language Processing, Automatic Speech Recognition, etc.",
                groups: [
                    {
                        label: "Education",
                        items: [
                            {
                                role: "Master's in Electrical and Computer Engineering (Machine Learning, Signal Processing)",
                                company: "University of Illinois Urbana-Champaign",
                                logo: "figures/uiuc.png",
                                date: "Aug 2021 - Dec 2022",
                                bullets: [
                                    "Coursework in Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Signal Processing",
                                    "Applied Scientist Intern at Amazon Alexa AI (Summer 2022)"
                                ]
                            },
                            {
                                role: "B.Tech in Electronics and Communication Engineering",
                                company: "National Institute of Technology, Tiruchirappalli",
                                logo: "figures/nitt.png",
                                date: "Jul 2016 - May 2020",
                                bullets: [
                                    "Undergraduate Thesis: Dimension estimation from depth-map of monocular images",
                                    "Mitacs Globalink Research Scholar at University of New Brunswick (Summer 2019)"
                                ]
                            }
                        ]
                    },
                    {
                        label: "Research/Work Experience",
                        items: [
                            {
                                role: "Applied Scientist II",
                                company: "Amazon AGI Foundations",
                                logo: "figures/amazon.png",
                                date: "Dec 2023 - Present",
                                bullets: [
                                    "Building Nova Family of Foundation Models",
                                    "Working on enhancing reasoning capabilities in multimodal foundation models"
                                ]
                            },
                            {
                                role: "Senior Data Scientist",
                                company: "Discover Financial Services",
                                logo: "figures/discover.png",
                                date: "Feb 2023 - Dec 2023",
                                bullets: [
                                    "Developed fraud strategy solutions for Account Takeover (ATO) type fraud across multiple channels, primarily zelle",
                                    "Played a key role in saving $$$ in potential fraud losses by aligning technical solutions with evolving threat landscapes"
                                ]
                            },
                            {
                                role: "Applied Scientist Intern",
                                company: "Amazon Alexa AI",
                                logo: "figures/alexa.png",
                                date: "May 2022 - Aug 2022",
                                bullets: [
                                    "Designed a Coarse-to-Fine Reasoning VQA system combining GloVe-based image-question fusion with an explainable LSTM+Transformer decoder, achieving strong performance on VQA-E and GQA-REX",
                                    "Published my research work at TSRML workshop, NeurIPS 2022"
                                ]
                            },
                            {
                                role: "Junior Research Fellow",
                                company: "<a href='https://spire.ee.iisc.ac.in/' target='_blank'>SPIRE Lab</a>, Indian Institute of Science, Bengaluru",
                                logo: ["figures/iisc.png", "figures/spire.png"],
                                date: "Jul 2020 - Jul 2021",
                                bullets: [
                                    "Curated multilingual speech data and developed a baseline ASR system for 6 Indian languages (30% WER) as part of the MUCS 2021 challenge, in collaboration with Microsoft Research India, IBM, and Navana Tech",
                                    "Published at Interspeech 2021 and organized the MUCS 2021 workshop featuring expert talks from academia and industry"
                                ]
                            },
                            {
                                role: "<a href=\"https://www.mitacs.ca/our-programs/globalink-research-internship-students/\" target=\"_blank\">Mitacs Globalink</a> Research Scholar",
                                company: "University of New Brunswick, Fredericton",
                                logo: ["figures/mitacs.png", "figures/unb.jpg"],
                                date: "May 2019 - Aug 2019",
                                bullets: [
                                    "Built an air-writing sentence recognition system using EMG and IMU sensor data from a wrist-based device, handling the full pipeline from data collection to model evaluation",
                                    "Trained an LSTM-based deep learning model with CTC loss using Keras and TensorFlow"
                                ]
                            },
                            {
                                role: "Undergraduate Researcher",
                                company: "National Institute of Technology, Tiruchirappalli",
                                logo: "figures/nitt.png",
                                date: "Dec 2019 - May 2020",
                                bullets: [
                                    "Undergraduate Thesis: Trained a deep learning model based on Convolutional Autoencoder-Artificial Neural Network architecture to estimate the distance (in 3D space) between two arbitrary points on a 2D image"
                                ]
                            },
                            {
                                role: "Research Intern",
                                company: "Indian Institute of Science, Bengaluru",
                                logo: "figures/iisc.png",
                                date: "May 2018 - Jul 2018",
                                bullets: [
                                    "Analyzed airplane sensor data with multiple Machine Learning algorithms to predict the status of blockage of inlet air-nozzles"
                                ]
                            }
                        ]
                    },
                    {
                        label: "Teaching",
                        intro: "I have worked as a puzzle coach, where I taught kids (aged 6-15) to solve the Rubik's cube and designed training curriculums for fellow coaches.",
                        items: [
                            {
                                role: "Rubik's Cube Instructor",
                                company: "Xoog (Famyo)",
                                logo: "figures/xoog.png",
                                date: "Dec 2020 - Jul 2021",
                                bullets: [
                                    "Designed and taught a structured Rubik's Cube curriculum - from 2×2 basics to 3×3 Blindfolded and 4×4-mentoring 20+ kids aged 6-15 with personalized strategies for speed improvement",
                                    "Ranked among the top 4 coaches (out of 40+) in May 2021 and developed advanced training modules for fellow instructors as part of the Coach Training Program"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            id: "research",
            number: "04",
            label: "Research",
            title: "What I've published",
            color: "blue",
            face: 5,
            content: {
                type: "publications",
                scholarNote: 'Full list on <a href="https://scholar.google.com/citations?user=r8i2rq8AAAAJ&hl=en" target="_blank">Google Scholar</a> (* denotes equal contribution)',
                items: [
                    {
                        title: "Stress Tests REVEAL Fragile Temporal and Visual Grounding in Video-Language Models",
                        url: "https://openreview.net/pdf?id=SJykq9Kdt6",
                        authors: 'Sethuraman TV, Savya Khosla, Aditi Tiwari, Vidya Ganesh, Rakshana Jayaprakash, Aditya Jain, Vignesh Srinivasakumar, Onkar Kishor Susladkar, Joey Wang, Srinidhi Sunkara, Aditya Shanmugham, Abbaas Alif Mohamed Nishar, <span class="me">Rakesh Vaideeswaran</span>, Simon Jenni, Derek Hoiem',
                        venue: '<a href="https://sites.google.com/view/icml-ctb/home" target="_blank">1. Combining Theory and Benchmarks: Towards A Virtuous Cycle to Understand and Guarantee Foundation Model Performance</a><br><a href="https://mechinterpworkshop.com/" target="_blank">2. Mechanistic Interpretability Workshop</a>',
                        thumb: "figures/reveal_teaser.png",
                        press: [
                            { label: "Poster (Presented @ ICML)", url: "https://mechinterpworkshop.com/poster-pdfs/800.pdf" },
                            { label: "Amazon Science", url: "https://www.amazon.science/publications/stress-tests-reveal-fragile-temporal-and-visual-grounding-in-video-language-models" }
                        ]
                    },
                    {
                        title: "Amazon Nova 2: Multimodal reasoning and generation models",
                        url: "https://www.amazon.science/publications/amazon-nova-2-multimodal-reasoning-and-generation-models",
                        authors: "Amazon Artificial General Intelligence",
                        venue: "Amazon Science, 2025",
                        thumb: "figures/nova_family.png",
                        press: [
                            { label: "TechCrunch", url: "https://techcrunch.com/2025/12/02/aws-launches-new-nova-ai-models-and-a-service-that-gives-customers-more-control/" },
                            { label: "WIRED", url: "https://www.wired.com/story/amazon-nova-forge-ai-models/" },
                            { label: "TechBuzz", url: "https://www.techbuzz.ai/articles/amazon-unveils-nova-2-ai-models-and-revolutionary-nova-forge" },
                            { label: "CRN", url: "https://www.crn.com/news/ai/2025/aws-nova-2-ai-models-launched-at-reinvent-2025-as-ceo-touts-new-innovation" },
                        ]
                    },
                    {
                        title: "Amazon Nova Premier: Technical Report and Model Card",
                        url: "https://www.amazon.science/publications/amazon-nova-premier-technical-report-and-model-card",
                        authors: "Amazon Artificial General Intelligence",
                        venue: "Amazon Science, 2025",
                        thumb: "figures/nova_premier.png",
                        press: [
                            { label: "TechCrunch", url: "https://techcrunch.com/2025/04/30/amazon-launches-nova-premier-its-largest-ai-model-yet/" },
                            { label: "the CUBE research", url: "https://thecuberesearch.com/amazon-debuts-nova-premier-high-performance-multimodal-ai-for-agent-workflows/" },
                            { label: "TechTarget", url: "https://www.techtarget.com/searchenterpriseai/news/366623532/What-Amazon-Nova-Premier-reveals-about-AI-models-and-agents" },
                        ]
                    },
                    {
                        title: "The Amazon Nova Family of Models: Technical Report and Model Card",
                        url: "https://www.amazon.science/publications/the-amazon-nova-family-of-models-technical-report-and-model-card",
                        authors: "Amazon Artificial General Intelligence (see \"Correspondence and Contributors\" for all contributors)",
                        venue: "Amazon Science, 2024",
                        thumb: "figures/nova_family.png",
                        press: [
                            { label: "Reuters", url: "https://www.reuters.com/technology/artificial-intelligence/amazon-announces-new-slate-ai-models-2024-12-03/" },
                            { label: "SiliconANGLE", url: "https://siliconangle.com/2024/12/03/amazon-introduces-next-gen-nova-family-multimodal-ai-foundation-models/" },
                            { label: "LifeWire", url: "https://www.lifewire.com/amazon-nova-ai-foundation-models-8755972" }
                        ]
                    },
                    {
                        title: "Can the decoded text from automatic speech recognition effectively detect spoken grammar errors?",
                        url: "https://spire.ee.iisc.ac.in/assets/PDFs/papers_pdf/Can_the_decoded_text_from_automatic_speech_recognition_effectively_detect_spoken_grammar_errors.pdf",
                        authors: 'Chowdam Venkata Thirumala Kumar, Meenakshi Sirigiraju, <span class="me">Rakesh Vaideeswaran</span>, Prasanta Kumar Ghosh, Chiranjeevi Yarra',
                        venue: "<a href=\"https://sites.google.com/view/slate2023\" target=\"_blank\">SLaTE, Interspeech 2023</a>",
                        thumb: "figures/slate_sged.png",
                        press: []
                    },
                    {
                        title: "Towards Reasoning-Aware Explainable VQA",
                        url: "https://arxiv.org/pdf/2211.05190",
                        authors: '<span class="me">Rakesh Vaideeswaran</span>, Feng Gao, Abhinav Mathur, Govind Thattai',
                        venue: "<a href=\"https://tsrml2022.github.io/\" target=\"_blank\">TSRML, NeurIPS 2022</a>",
                        thumb: "figures/evqa.png",
                        press: []
                    },
                    {
                        title: "A study on native American English speech recognition by Indian listeners with varying word familiarity level",
                        url: "https://arxiv.org/pdf/2112.04151",
                        authors: 'Abhayjeet Singh, Achuth Rao, <span class="me">Rakesh Vaideeswaran</span>, Chiranjeevi Yarra, Prasanta Kumar Ghosh',
                        venue: "O-COCOSDA 2021",
                        thumb: "figures/aesr.png",
                        press: []
                    },
                    {
                        title: "Multilingual and code-switching ASR challenges for low resource Indian languages",
                        url: "https://www.isca-archive.org/interspeech_2021/diwan21_interspeech.pdf",
                        authors: 'Anuj Diwan*, <span class="me">Rakesh Vaideeswaran*</span>, Sanket Shah*, Ankita Singh*, Srinivasa Raghavan, Shreya Khare, Vinit Unni, Saurabh Vyas, Akash Rajpuria, Chiranjeevi Yarra, Ashish Mittal, Prasanta Kumar Ghosh, Preethi Jyothi, Kalika Bali, Vivek Seshadri, Sunayana Sitaram, Samarth Bharadwaj, Jai Nanavati, Raoul Nanavati, Karthik Sankaranarayanan, Tejaswi Seeram, Basil Abraham',
                        venue: "<a href=\"https://www.interspeech2021.org/\" target=\"_blank\">Interspeech 2021</a>",
                        thumb: "figures/mucs2021.png",
                        press: [
                            { label: "BusinessWire", url: "https://www.businesswire.com/news/home/20210811005890/en/Dialpad-India-Successfully-Trains-Six-Indian-Languages-as-Part-of-MUCS-2021-ASR-Challenge" }
                        ]
                    },
                    {
                        title: "Dimension Estimation from Depth-Map of Monocular Images",
                        url: "https://medium.com/geekculture/convolutional-autoencoder-based-dimension-estimation-from-depth-map-of-monocular-images-9269d966bb86",
                        authors: 'Guruprasad Viswanathan Ramesh*, Hariharan Natesh*, <span class="me">Rakesh Vaideeswaran*</span>',
                        venue: "Medium, 2021",
                        thumb: "figures/dimest.png",
                        press: []
                    },
                    {
                        title: "Analysis of machine learning algorithms for wi-fi-based indoor positioning system",
                        url: "https://ieeexplore.ieee.org/document/8933285",
                        authors: 'R Abishek*, KR Abishek*, N Hariharan*, <span class="me">Rakesh Vaideeswaran*</span>, C Sundara Paripooranan*',
                        venue: "IMICPW 2019",
                        thumb: "figures/ilocus.png",
                        press: [
                            { label: "Demo", url: "https://drive.google.com/file/d/17l8LoIRsL4FXuDlvG23agm6GUnuGONlP/view" }
                        ]
                    }
                ]
            }
        },
        {
            id: "misc",
            number: "05",
            label: "Miscellaneous",
            title: "And more...",
            color: "red",
            face: 0,
            content: {
                type: "experience",
                groups: [
                    {
                        label: "Learning AI intuitively",
                        intro: "I like to vibe-code interactive visualizations to develop and share intuition for key AI/ML concepts.",
                        items: [
                            {
                                company: "RL Policy Gradient Visualizer",
                                role: "Interactive RL intuition tool",
                                logo: "figures/policy_gradient_thumb.png",
                                date: "",
                                link: "intuitive_ai/policy_gradient_visualizer.html",
                                bullets: [
                                    "Visualize how policy gradients push probability toward high-reward actions",
                                    "Adjustable learning rate, reward signals, and action distributions"
                                ]
                            },
                            {
                                company: "RoPE Embedding Visualizer",
                                role: "Rotary Position Embedding explorer",
                                logo: "figures/rope_thumb.png",
                                date: "",
                                link: "intuitive_ai/rope_embedding.html",
                                bullets: [
                                    "Unit circle visualization of rotary position embeddings",
                                    "See how relative position information is encoded via rotation"
                                ]
                            },
                            {
                                company: "KV Cache Visualizer",
                                role: "Key-Value cache mechanics explorer",
                                logo: "figures/kv_cache_thumb.png",
                                date: "",
                                link: "intuitive_ai/kv_cache_visualizer.html",
                                bullets: [
                                    "Visualize how KV cache works during autoregressive generation",
                                    "Understand memory savings and incremental decoding"
                                ]
                            },
                            {
                                company: "Paged Attention Visualizer",
                                role: "Memory-efficient attention explorer",
                                logo: "figures/paged_attention_thumb.png",
                                date: "",
                                link: "intuitive_ai/paged_attention_visualizer.html",
                                bullets: [
                                    "Visualize how paged attention manages KV cache memory",
                                    "Understand block tables, physical/virtual pages, and memory sharing"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            id: "connect",
            number: "06",
            label: "Connect",
            title: "Let's talk",
            color: "yellow",
            face: 3,
            content: {
                type: "connect",
                paragraphs: [
                    'Always happy to chat - whether it\'s about multimodal AI, foundation models, the intersection of structured reasoning and machine learning, or just a good conversation. Feel free to reach out!'
                ],
                links: [
                    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=r8i2rq8AAAAJ&hl=en" },
                    { label: "LinkedIn", url: "https://www.linkedin.com/in/rakeshmahesh/" },
                    { label: "WCA Profile", url: "https://www.worldcubeassociation.org/persons/2012VAID02" },
                    { label: "CV", url: "CV.pdf" },
                    { label: "Email", url: "mailto:rakeshvaideeswaran.nitt@gmail.com"}
                ]
            }
        }
    ]
};
