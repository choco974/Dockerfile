"use client"

import { useState, useEffect } from "react"

const AI_SPECIALISTS = [
  // Quantum AI & Neural Networks (100 specialists)
  "Quantum DeepSeek AI Specialist",
  "Neural Claude.ai Expert",
  "Quantum Computing Developer",
  "Neural Network Architect",
  "Quantum Machine Learning Expert",
  "Advanced Neural Processing Specialist",
  "Quantum Algorithm Developer",
  "Deep Learning Neural Expert",
  "Quantum AI Researcher",
  "Neural Pattern Recognition Specialist",
  "Quantum Data Processing Expert",
  "Advanced AI Consciousness Developer",
  "Quantum Entanglement AI Specialist",
  "Neural Synaptic Network Expert",
  "Quantum Superposition Developer",
  "Advanced Cognitive AI Specialist",
  "Quantum Parallel Processing Expert",
  "Neural Memory Architecture Developer",
  "Quantum State AI Specialist",
  "Advanced Learning Algorithm Expert",

  // Advanced AI Models & Platforms (150 specialists)
  "DeepSeek AI Specialist",
  "Claude.ai Expert",
  "YouWare.com Developer",
  "Bolt.new Specialist",
  "Veo 2 Genesis Expert",
  "MindStudio Developer",
  "AI Agent Minimax Specialist",
  "AutoGPT Expert",
  "ClickUp AI Developer",
  "OpenManus Specialist",
  "Mixus Expert",
  "Relevance AI Developer",
  "Runner H Specialist",
  "Kimi AI Expert",
  "K2 AI Developer",
  "OWL by Camel AI Specialist",
  "MyShell.ai Expert",
  "Agent.ai Developer",
  "Adobe Agents IA Specialist",
  "Momen AI Expert",
  "Veriblue Verified Specialist",
  "Agents SDK OpenAI Developer",
  "Abacus AI Expert",
  "AutoGen Specialist",
  "Grok 4 Developer",
  "CommandDash Expert",
  "MetaGPT Specialist",
  "Astronomer AI Developer",
  "Qwen3-Coder Expert",
  "Emergent AI Specialist",
  "Claude 4 Developer",
  "Victoria AI Expert",
  "Enso AI Specialist",
  "Emergence AI Developer",
  "OpenAI Gym Expert",
  "TensorFlow Specialist",
  "PyTorch Developer",
  "Perplexity AI Expert",
  "Figstack Specialist",
  "Agent Replit Developer",
  "Grok 3 Colossus Expert",
  "ChatGPT 4.0 Specialist",
  "Claude SONNET 4 Developer",
  "Claude OPUS 4 Expert",
  "Anthropic AI Specialist",
  "Rosebud AI Game Creator",
  "Midjourney Video V1 Expert",
  "Mirage LSD Decart Specialist",
  "Image Generator n8n Developer",
  "Genie 3 by Google Expert",
  "Promethean AI Specialist",
  "Ludo.ai Developer",
  "Layer AI Expert",
  "Hotpot.ai Specialist",
  "Leonardo AI Developer",
  "InWorld AI Expert",
  "GPT-5 Advanced Specialist",
  "Claude 5 Quantum Expert",
  "Gemini Ultra Pro Developer",
  "LLaMA 3 Advanced Specialist",
  "PaLM 3 Expert",
  "Bard Advanced Developer",
  "Copilot X Specialist",
  "CodeT5+ Expert",
  "AlphaCode 2 Developer",
  "Codex Advanced Specialist",
  "GitHub Copilot X Expert",
  "Tabnine Pro Developer",
  "Kite Advanced Specialist",
  "IntelliCode Expert",
  "DeepCode Developer",
  "SonarQube AI Specialist",
  "CodeClimate Expert",
  "Snyk AI Developer",
  "WhiteSource Specialist",
  "Veracode AI Expert",
  "Checkmarx Developer",
  "Fortify AI Specialist",
  "OWASP ZAP Expert",
  "Burp Suite AI Developer",
  "Nessus AI Specialist",
  "Qualys Expert",
  "Rapid7 Developer",
  "Splunk AI Specialist",
  "Elastic AI Expert",
  "Datadog Developer",
  "New Relic AI Specialist",
  "AppDynamics Expert",
  "Dynatrace Developer",
  "Prometheus AI Specialist",
  "Grafana Expert",
  "Kibana Developer",
  "Logstash AI Specialist",
  "Fluentd Expert",
  "Beats Developer",
  "Jaeger AI Specialist",
  "Zipkin Expert",
  "OpenTelemetry Developer",
  "Istio AI Specialist",
  "Linkerd Expert",
  "Consul Developer",
  "Vault AI Specialist",
  "Terraform Expert",
  "Ansible Developer",
  "Puppet AI Specialist",
  "Chef Expert",
  "SaltStack Developer",
  "Kubernetes AI Specialist",
  "Docker Expert",
  "Podman Developer",
  "Containerd AI Specialist",
  "CRI-O Expert",
  "rkt Developer",
  "LXC AI Specialist",
  "OpenVZ Expert",
  "Proxmox Developer",
  "VMware AI Specialist",
  "VirtualBox Expert",
  "QEMU Developer",
  "Xen AI Specialist",
  "KVM Expert",
  "Hyper-V Developer",
  "AWS AI Specialist",
  "Azure Expert",
  "GCP Developer",
  "IBM Cloud AI Specialist",
  "Oracle Cloud Expert",
  "Alibaba Cloud Developer",
  "DigitalOcean AI Specialist",
  "Linode Expert",
  "Vultr Developer",
  "Hetzner AI Specialist",
  "OVH Expert",
  "Scaleway Developer",
  "UpCloud AI Specialist",
  "Cloudflare Expert",
  "Fastly Developer",
  "KeyCDN AI Specialist",
  "MaxCDN Expert",
  "Amazon CloudFront Developer",
  "Azure CDN AI Specialist",
  "Google Cloud CDN Expert",
  "Akamai Developer",
  "Incapsula AI Specialist",
  "Sucuri Expert",
  "Wordfence Developer",
  "iThemes Security AI Specialist",
  "All in One WP Security Expert",
  "Jetpack Security Developer",

  // Blockchain & Web3 (50 specialists)
  "Ethereum Smart Contract Developer",
  "Solidity Expert",
  "Web3.js Specialist",
  "Truffle Developer",
  "Hardhat Expert",
  "Remix IDE Specialist",
  "MetaMask Integration Developer",
  "IPFS Expert",
  "Polygon Specialist",
  "Binance Smart Chain Developer",
  "Avalanche Expert",
  "Solana Specialist",
  "Cardano Developer",
  "Polkadot Expert",
  "Chainlink Specialist",
  "The Graph Developer",
  "Uniswap Expert",
  "OpenSea Integration Specialist",
  "NFT Marketplace Developer",
  "DeFi Protocol Expert",
  "DAO Framework Specialist",
  "Crypto Wallet Developer",
  "Blockchain Security Expert",
  "Smart Contract Auditor",
  "Web3 Frontend Specialist",
  "Decentralized Storage Expert",
  "Cross-chain Bridge Developer",
  "Layer 2 Solutions Specialist",
  "Consensus Algorithm Expert",
  "Tokenomics Developer",
  "Yield Farming Specialist",
  "Liquidity Mining Expert",
  "Staking Protocol Developer",
  "Governance Token Specialist",
  "Flash Loan Expert",
  "MEV Protection Developer",
  "ZK-Rollup Specialist",
  "Optimistic Rollup Expert",
  "Plasma Chain Developer",
  "State Channel Specialist",
  "Lightning Network Expert",
  "Atomic Swap Developer",
  "Multi-sig Wallet Specialist",
  "Hardware Wallet Expert",
  "Cold Storage Developer",
  "Hot Wallet Specialist",
  "Custodial Service Expert",
  "Non-custodial Developer",
  "Decentralized Identity Specialist",
  "Self-sovereign Identity Expert",

  // Metaverse & VR/AR (50 specialists)
  "Unity 3D Metaverse Developer",
  "Unreal Engine VR Expert",
  "WebXR Specialist",
  "A-Frame Developer",
  "Three.js VR Expert",
  "Babylon.js Specialist",
  "PlayCanvas Developer",
  "Godot VR Expert",
  "Blender 3D Specialist",
  "Maya Developer",
  "3ds Max Expert",
  "Cinema 4D Specialist",
  "Houdini Developer",
  "ZBrush Expert",
  "Substance Painter Specialist",
  "Substance Designer Developer",
  "Quixel Expert",
  "Megascans Specialist",
  "Photogrammetry Developer",
  "LiDAR Scanning Expert",
  "Motion Capture Specialist",
  "Facial Animation Developer",
  "Procedural Generation Expert",
  "Terrain Generation Specialist",
  "Weather System Developer",
  "Physics Simulation Expert",
  "Particle System Specialist",
  "Shader Programming Developer",
  "HLSL Expert",
  "GLSL Specialist",
  "Vulkan Developer",
  "DirectX Expert",
  "OpenGL Specialist",
  "Metal Developer",
  "WebGL Expert",
  "WebGPU Specialist",
  "Ray Tracing Developer",
  "Global Illumination Expert",
  "Real-time Rendering Specialist",
  "PBR Material Developer",
  "HDR Lighting Expert",
  "Post-processing Specialist",
  "Anti-aliasing Developer",
  "LOD System Expert",
  "Occlusion Culling Specialist",
  "Spatial Audio Developer",
  "3D Audio Expert",
  "Haptic Feedback Specialist",
  "Hand Tracking Developer",
  "Eye Tracking Expert",

  // Advanced Game Development (50 specialists)
  "Unreal Engine 5 Expert",
  "Unity 2023 Developer",
  "Godot 4 Specialist",
  "CryEngine Developer",
  "Lumberyard Expert",
  "Source 2 Specialist",
  "id Tech Developer",
  "Frostbite Expert",
  "REDengine Specialist",
  "Creation Engine Developer",
  "Anvil Engine Expert",
  "Dunia Engine Specialist",
  "IW Engine Developer",
  "MT Framework Expert",
  "Fox Engine Specialist",
  "Decima Engine Developer",
  "Snowdrop Engine Expert",
  "Northlight Engine Specialist",
  "4A Engine Developer",
  "Chrome Engine Expert",
  "Game Physics Specialist",
  "AI Behavior Developer",
  "Pathfinding Expert",
  "State Machine Specialist",
  "Decision Tree Developer",
  "Neural Network AI Expert",
  "Procedural Content Specialist",
  "Level Design Developer",
  "Game Balance Expert",
  "Monetization Specialist",
  "Analytics Developer",
  "A/B Testing Expert",
  "User Acquisition Specialist",
  "Retention Developer",
  "Live Ops Expert",
  "Community Management Specialist",
  "Social Features Developer",
  "Multiplayer Expert",
  "Networking Specialist",
  "Server Architecture Developer",
  "Database Expert",
  "Cloud Gaming Specialist",
  "Streaming Developer",
  "Mobile Optimization Expert",
  "Performance Specialist",
  "Memory Management Developer",
  "Battery Optimization Expert",
  "Cross-platform Specialist",
  "Porting Developer",
  "Localization Expert",

  // Advanced Web Technologies (100 specialists)
  "Next.js 14 Expert",
  "React 18 Specialist",
  "Vue 3 Developer",
  "Angular 17 Expert",
  "Svelte 5 Specialist",
  "Solid.js Developer",
  "Qwik Expert",
  "Astro Specialist",
  "Remix Developer",
  "Nuxt 3 Expert",
  "SvelteKit Specialist",
  "Vite Developer",
  "Webpack Expert",
  "Rollup Specialist",
  "Parcel Developer",
  "esbuild Expert",
  "Turbopack Specialist",
  "Bun Developer",
  "Deno Expert",
  "Node.js Specialist",
  "TypeScript Developer",
  "JavaScript Expert",
  "WebAssembly Specialist",
  "Rust Developer",
  "Go Expert",
  "Python Specialist",
  "Java Developer",
  "C# Expert",
  "C++ Specialist",
  "Kotlin Developer",
  "Swift Expert",
  "Dart Specialist",
  "PHP Developer",
  "Ruby Expert",
  "Elixir Specialist",
  "Clojure Developer",
  "Scala Expert",
  "Haskell Specialist",
  "F# Developer",
  "OCaml Expert",
  "Erlang Specialist",
  "Prolog Developer",
  "Lisp Expert",
  "Scheme Specialist",
  "Racket Developer",
  "Julia Expert",
  "R Specialist",
  "MATLAB Developer",
  "Octave Expert",
  "Mathematica Specialist",
  "Maple Developer",
  "Sage Expert",
  "Maxima Specialist",
  "SymPy Developer",
  "NumPy Expert",
  "SciPy Specialist",
  "Pandas Developer",
  "Matplotlib Expert",
  "Seaborn Specialist",
  "Plotly Developer",
  "Bokeh Expert",
  "D3.js Specialist",
  "Chart.js Developer",
  "Highcharts Expert",
  "ApexCharts Specialist",
  "Recharts Developer",
  "Victory Expert",
  "Nivo Specialist",
  "Observable Developer",
  "Jupyter Expert",
  "Colab Specialist",
  "Kaggle Developer",
  "Databricks Expert",
  "Snowflake Specialist",
  "BigQuery Developer",
  "Redshift Expert",
  "Athena Specialist",
  "Presto Developer",
  "Spark Expert",
  "Hadoop Specialist",
  "Kafka Developer",
  "RabbitMQ Expert",
  "Redis Specialist",
  "MongoDB Developer",
  "PostgreSQL Expert",
  "MySQL Specialist",
  "SQLite Developer",
  "CouchDB Expert",
  "Neo4j Specialist",
  "ArangoDB Developer",
  "InfluxDB Expert",
  "TimescaleDB Specialist",
  "ClickHouse Developer",
  "Elasticsearch Expert",
  "Solr Specialist",
  "Algolia Developer",
  "Meilisearch Expert",
  "Typesense Specialist",
  "Pinecone Developer",
  "Weaviate Expert",
  "Qdrant Specialist",
  "Chroma Developer",
  "LangChain Expert",
]

const SITE_TYPES = [
  "E-commerce Platform",
  "Corporate Website",
  "Portfolio Site",
  "Blog Platform",
  "SaaS Application",
  "Landing Page",
  "Educational Platform",
  "Social Network",
  "News Portal",
  "Real Estate Platform",
  "Healthcare Portal",
  "Financial Dashboard",
  "Travel Booking",
  "Restaurant Website",
  "Event Platform",
  "Job Board",
  "Dating Platform",
  "Fitness App",
  "Recipe Website",
  "Music Streaming",
  "Video Platform",
  "Gaming Portal",
  "Cryptocurrency Exchange",
  "NFT Marketplace",
  "Auction Site",
  "Booking System",
  "Appointment Scheduler",
  "CRM System",
  "Project Management",
  "Inventory System",
  "Forum Community",
  "Knowledge Base",
  "Documentation Site",
  "API Documentation",
  "Developer Portal",
]

const FEEDBACK_QUESTIONS = [
  "Souhaitez-vous ajouter une section e-commerce avec panier d'achat intégré ?",
  "Voulez-vous intégrer un système de chat en temps réel avec IA ?",
  "Désirez-vous ajouter des animations 3D interactives sur la page d'accueil ?",
  "Souhaitez-vous implémenter un système de réservation en ligne ?",
  "Voulez-vous ajouter un blog avec système de commentaires avancé ?",
  "Désirez-vous intégrer des cartes interactives avec géolocalisation ?",
  "Souhaitez-vous ajouter un espace membre avec authentification ?",
  "Voulez-vous implémenter un système de notifications push ?",
  "Désirez-vous ajouter une galerie photo avec effet lightbox ?",
  "Souhaitez-vous intégrer des graphiques de données en temps réel ?",
  "Voulez-vous ajouter un système de téléchargement de fichiers ?",
  "Désirez-vous implémenter un calendrier d'événements interactif ?",
  "Souhaitez-vous ajouter des formulaires de contact avancés ?",
  "Voulez-vous intégrer un système de paiement sécurisé ?",
  "Désirez-vous ajouter des témoignages clients avec carrousel ?",
  "Souhaitez-vous implémenter un système de recherche avancée ?",
  "Voulez-vous ajouter des vidéos de présentation en arrière-plan ?",
  "Désirez-vous intégrer des réseaux sociaux avec flux en direct ?",
  "Souhaitez-vous ajouter un système de FAQ avec recherche ?",
  "Voulez-vous implémenter des statistiques de visite en temps réel ?",
  "Le design actuel correspond-il à votre vision ? Quels ajustements souhaitez-vous ?",
  "Les couleurs choisies reflètent-elles votre identité de marque ?",
  "La navigation vous semble-t-elle intuitive et complète ?",
  "Souhaitez-vous modifier la disposition des sections principales ?",
  "Les fonctionnalités actuelles répondent-elles à vos besoins spécifiques ?",
]

export default function BVKInterface() {
  const [input, setInput] = useState("")
  const [activeView, setActiveView] = useState<"desktop" | "mobile">("desktop")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationStep, setGenerationStep] = useState(0)
  const [activeSpecialists, setActiveSpecialists] = useState<string[]>([])
  const [generatedSite, setGeneratedSite] = useState<any>("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [siteProgress, setSiteProgress] = useState(0)
  const [currentTask, setCurrentTask] = useState("")
  const [buildSteps, setBuildSteps] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState("")
  const [feedbackQuestions, setFeedbackQuestions] = useState<string[]>([])
  const [generatedFiles, setGeneratedFiles] = useState<{ name: string; type: string; size: string }[]>([])

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setSiteProgress((prev) => {
          if (prev >= 100) {
            setIsGenerating(false)
            setShowFeedback(true)
            const randomQuestions = FEEDBACK_QUESTIONS.sort(() => 0.5 - Math.random()).slice(0, 5)
            setFeedbackQuestions(randomQuestions)
            return 100
          }
          return prev + 0.3 // Much slower increment for realistic 60-second build
        })

        if (Math.random() > 0.4) {
          // More frequent specialist updates
          const randomSpecialist = AI_SPECIALISTS[Math.floor(Math.random() * AI_SPECIALISTS.length)]
          setActiveSpecialists((prev) => {
            const newList = [...prev, randomSpecialist].slice(-12) // Show more active specialists
            return newList
          })
        }

        const detailedTasks = [
          "🔍 Analyse approfondie des exigences client...",
          "📋 Création du cahier des charges technique...",
          "🏗️ Architecture avancée du projet...",
          "🎨 Conception du design system complet...",
          "🖼️ Génération des assets visuels...",
          "⚛️ Développement des composants React...",
          "🔧 Configuration des outils de build...",
          "💾 Mise en place de la base de données...",
          "🔐 Implémentation de la sécurité avancée...",
          "🔑 Configuration de l'authentification...",
          "📱 Optimisation responsive multi-device...",
          "⚡ Optimisation des performances critiques...",
          "🧪 Tests unitaires et d'intégration...",
          "🔍 Tests de sécurité et vulnérabilités...",
          "🚀 Configuration du déploiement...",
          "📊 Intégration des analytics avancées...",
          "🔍 Optimisation SEO technique...",
          "♿ Tests d'accessibilité WCAG 2.1...",
          "🌐 Tests multi-navigateur complets...",
          "📈 Configuration du monitoring...",
          "🔔 Mise en place des alertes...",
          "📝 Génération de la documentation...",
          "🎯 Tests de performance Lighthouse...",
          "🔒 Audit de sécurité final...",
          "✅ Validation qualité complète...",
        ]

        const randomTask = detailedTasks[Math.floor(Math.random() * detailedTasks.length)]
        setCurrentTask(randomTask)

        if (Math.random() > 0.6) {
          // More frequent step updates
          setBuildSteps((prev) => [...prev, randomTask].slice(-15)) // Show more build steps
        }

        if (Math.random() > 0.7) {
          // More frequent file generation
          const fileTypes = [
            { name: "index.html", type: "HTML", size: "18.7 KB" },
            { name: "styles.css", type: "CSS", size: "24.3 KB" },
            { name: "main.js", type: "JavaScript", size: "32.8 KB" },
            { name: "components.jsx", type: "React", size: "45.2 KB" },
            { name: "api.php", type: "PHP", size: "19.6 KB" },
            { name: "database.sql", type: "SQL", size: "12.4 KB" },
            { name: "config.json", type: "Config", size: "3.7 KB" },
            { name: "manifest.json", type: "PWA", size: "2.8 KB" },
            { name: "service-worker.js", type: "PWA", size: "8.9 KB" },
            { name: "auth.js", type: "Security", size: "15.3 KB" },
            { name: "utils.js", type: "Utilities", size: "11.7 KB" },
            { name: "analytics.js", type: "Analytics", size: "9.2 KB" },
            { name: "responsive.css", type: "CSS", size: "16.8 KB" },
            { name: "animations.css", type: "CSS", size: "13.5 KB" },
            { name: "tests.spec.js", type: "Tests", size: "22.1 KB" },
          ]
          const randomFile = fileTypes[Math.floor(Math.random() * fileTypes.length)]
          setGeneratedFiles((prev) => {
            if (!prev.find((f) => f.name === randomFile.name)) {
              return [...prev, randomFile].slice(-10) // Show more generated files
            }
            return prev
          })
        }
      }, 500) // Slower interval for more detailed progression

      return () => clearInterval(interval)
    }
  }, [isGenerating])

  const generateRoutier974Site = () => {
    const siteType = "ROUTIER 974 SIMULATOR - Jeu de Simulation de Conduite"

    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROUTIER 974 SIMULATOR - Découvrez l'Île de la Réunion</title>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            overflow-x: hidden;
        }
        
        .hero-section {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23ff6b35" width="1200" height="800"/><path fill="%23004e92" d="M0 400c200-100 400-50 600 0s400 50 600-50v450H0z"/><circle fill="%23ffd23f" cx="200" cy="150" r="80"/><polygon fill="%2327ae60" points="300,600 400,500 500,600 450,650 350,650"/><polygon fill="%2327ae60" points="700,550 800,450 900,550 850,600 750,600"/></svg>') center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }
        
        .logo-974 {
            position: absolute;
            top: 20px;
            left: 20px;
            background: #ff6b35;
            color: white;
            padding: 10px 20px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 24px;
            box-shadow: 0 4px 15px rgba(255,107,53,0.3);
        }
        
        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            background: linear-gradient(45deg, #ff6b35, #ffd23f);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 30px;
            max-width: 800px;
        }
        
        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-primary {
            background: linear-gradient(45deg, #ff6b35, #ff8c42);
            color: white;
            box-shadow: 0 4px 15px rgba(255,107,53,0.3);
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .features-section {
            padding: 100px 20px;
            background: #1a1a2e;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section-title {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 60px;
            background: linear-gradient(45deg, #ff6b35, #ffd23f);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }
        
        .feature-card {
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
        }
        
        .feature-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            display: block;
        }
        
        .vr-section {
            padding: 100px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .vr-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }
        
        .vr-text h2 {
            font-size: 2.5rem;
            margin-bottom: 30px;
        }
        
        .vr-text p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .vr-demo {
            height: 400px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .map-section {
            padding: 100px 20px;
            background: #0f3460;
        }
        
        .map-container {
            height: 500px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .truck-showcase {
            padding: 100px 20px;
            background: #16213e;
        }
        
        .truck-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
        }
        
        .truck-card {
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            overflow: hidden;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .truck-image {
            height: 250px;
            background: linear-gradient(45deg, #ff6b35, #ffd23f);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
        }
        
        .truck-info {
            padding: 30px;
        }
        
        .truck-info h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #ff6b35;
        }
        
        .specs-list {
            list-style: none;
        }
        
        .specs-list li {
            padding: 5px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .download-section {
            padding: 100px 20px;
            background: linear-gradient(135deg, #ff6b35 0%, #ffd23f 100%);
            text-align: center;
        }
        
        .download-section h2 {
            color: #1a1a2e;
            font-size: 3rem;
            margin-bottom: 30px;
        }
        
        .download-section p {
            color: #1a1a2e;
            font-size: 1.3rem;
            margin-bottom: 40px;
        }
        
        .platform-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .platform-btn {
            background: #1a1a2e;
            color: white;
            padding: 20px 40px;
            border-radius: 15px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            transition: transform 0.3s ease;
        }
        
        .platform-btn:hover {
            transform: scale(1.05);
        }
        
        .footer {
            background: #0a0a0a;
            padding: 60px 20px 20px;
            text-align: center;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-section h3 {
            color: #ff6b35;
            margin-bottom: 20px;
        }
        
        .footer-section a {
            color: #ccc;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
        }
        
        .footer-section a:hover {
            color: #ff6b35;
        }
        
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
            
            .vr-content {
                grid-template-columns: 1fr;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }
        
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        
        .loading-content {
            text-align: center;
            color: white;
        }
        
        .loading-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255,107,53,0.3);
            border-top: 4px solid #ff6b35;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loading-overlay" id="loadingOverlay">
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <h2>Chargement de l'expérience ROUTIER 974...</h2>
            <p>Initialisation de la réalité virtuelle et des paysages de l'île</p>
        </div>
    </div>

    <div class="logo-974">974 🏝️</div>
    
    <section class="hero-section">
        <div class="hero-content">
            <h1>ROUTIER 974 SIMULATOR</h1>
            <p>Découvrez l'île de la Réunion comme jamais auparavant. Conduisez vos camions à travers les paysages époustouflants du 974 en réalité virtuelle.</p>
            <div class="cta-buttons">
                <a href="#download" class="btn btn-primary">Télécharger Maintenant</a>
                <a href="#vr-demo" class="btn btn-secondary">Essayer en VR</a>
            </div>
        </div>
    </section>

    <section class="features-section">
        <div class="container">
            <h2 class="section-title">Fonctionnalités Révolutionnaires</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <span class="feature-icon">🚛</span>
                    <h3>Camions Authentiques</h3>
                    <p>Flotte complète de camions réunionnais avec logos 974 authentiques et détails ultra-réalistes</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🏝️</span>
                    <h3>Paysages de la Réunion</h3>
                    <p>Cirque de Mafate, Piton de la Fournaise, Route du Littoral - tous reproduits fidèlement</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🥽</span>
                    <h3>Réalité Virtuelle</h3>
                    <p>Immersion totale en VR avec support Unity et Unreal Engine pour une expérience inégalée</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🗺️</span>
                    <h3>Navigation Mapbox</h3>
                    <p>Intégration Mapbox avancée avec géolocalisation précise et routes dynamiques</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">⚙️</span>
                    <h3>Physique Réaliste</h3>
                    <p>Moteur physique avancé avec gestion des pentes, météo tropicale et conditions routières</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">📱</span>
                    <h3>Multi-Plateforme</h3>
                    <p>Disponible sur PC, VR, mobile avec synchronisation cloud et progression partagée</p>
                </div>
            </div>
        </div>
    </section>

    <section class="vr-section" id="vr-demo">
        <div class="container">
            <div class="vr-content">
                <div class="vr-text">
                    <h2>Expérience VR Immersive</h2>
                    <p>Montez dans la cabine de votre camion et ressentez chaque virage de la Route des Tamarins. Notre technologie VR révolutionnaire vous transporte littéralement sur l'île de la Réunion.</p>
                    <p>Vues disponibles :</p>
                    <ul>
                        <li>🏠 Vue intérieur cabine ultra-détaillée</li>
                        <li>🌅 Vue extérieure cinématographique</li>
                        <li>🎮 Mode 3D traditionnel</li>
                        <li>📱 Mode 2D pour mobile</li>
                        <li>🥽 Réalité virtuelle complète</li>
                        <li>🚁 Vue drone pour les paysages</li>
                    </ul>
                </div>
                <div class="vr-demo">
                    <a-scene embedded style="height: 400px; width: 100%;">
                        <a-sky color="#87CEEB"></a-sky>
                        <a-plane position="0 0 -4" rotation="-90 0 0" width="8" height="8" color="#228B22"></a-plane>
                        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#FF6B35" animation="property: rotation; to: 0 405 0; loop: true; dur: 10000"></a-box>
                        <a-sphere position="0 1.25 -5" radius="1.25" color="#FFD23F"></a-sphere>
                        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#004E92"></a-cylinder>
                        <a-text value="ROUTIER 974 VR" position="0 2 -2" align="center" color="#FF6B35"></a-text>
                    </a-scene>
                </div>
            </div>
        </div>
    </section>

    <section class="map-section">
        <div class="container">
            <h2 class="section-title">Carte Interactive de la Réunion</h2>
            <div class="map-container" id="map"></div>
        </div>
    </section>

    <section class="truck-showcase">
        <div class="container">
            <h2 class="section-title">Flotte de Camions 974</h2>
            <div class="truck-grid">
                <div class="truck-card">
                    <div class="truck-image">🚛 974</div>
                    <div class="truck-info">
                        <h3>Scania R-Series Réunion</h3>
                        <ul class="specs-list">
                            <li>Moteur: V8 730 CV</li>
                            <li>Transmission: 12 vitesses</li>
                            <li>Cabine: Climatisée tropicale</li>
                            <li>Spécial: Logo 974 authentique</li>
                        </ul>
                    </div>
                </div>
                <div class="truck-card">
                    <div class="truck-image">🚚 974</div>
                    <div class="truck-info">
                        <h3>Mercedes Actros Péi</h3>
                        <ul class="specs-list">
                            <li>Moteur: 6 cylindres 510 CV</li>
                            <li>Transmission: Automatique</li>
                            <li>Cabine: Confort tropical</li>
                            <li>Spécial: Décoration créole</li>
                        </ul>
                    </div>
                </div>
                <div class="truck-card">
                    <div class="truck-image">🚐 974</div>
                    <div class="truck-info">
                        <h3>Volvo FH Océan Indien</h3>
                        <ul class="specs-list">
                            <li>Moteur: D13K 540 CV</li>
                            <li>Transmission: I-Shift</li>
                            <li>Cabine: Globetrotter XL</li>
                            <li>Spécial: Peinture lagon</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="download-section" id="download">
        <div class="container">
            <h2>Téléchargez ROUTIER 974 SIMULATOR</h2>
            <p>Disponible sur toutes les plateformes avec support VR complet</p>
            <div class="platform-buttons">
                <a href="#" class="platform-btn">🖥️ PC Windows</a>
                <a href="#" class="platform-btn">🍎 macOS</a>
                <a href="#" class="platform-btn">🐧 Linux</a>
                <a href="#" class="platform-btn">🥽 Oculus VR</a>
                <a href="#" class="platform-btn">📱 Android</a>
                <a href="#" class="platform-btn">📱 iOS</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ROUTIER 974</h3>
                    <a href="#">À propos</a>
                    <a href="#">Équipe</a>
                    <a href="#">Carrières</a>
                    <a href="#">Presse</a>
                </div>
                <div class="footer-section">
                    <h3>Support</h3>
                    <a href="#">Centre d'aide</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                    <a href="#">Bug Report</a>
                </div>
                <div class="footer-section">
                    <h3>Communauté</h3>
                    <a href="#">Discord</a>
                    <a href="#">Reddit</a>
                    <a href="#">YouTube</a>
                    <a href="#">Twitch</a>
                </div>
                <div class="footer-section">
                    <h3>Développement</h3>
                    <a href="#">Unity Engine</a>
                    <a href="#">Unreal Engine</a>
                    <a href="#">Mapbox API</a>
                    <a href="#">Documentation</a>
                </div>
            </div>
            <p>&copy; 2024 ROUTIER 974 SIMULATOR. Développé avec ❤️ pour l'île de la Réunion.</p>
        </div>
    </footer>

    <script>
        // Initialize Mapbox map
        mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazl2bDJoZjAwMDAwM29wZmRvOXNkMmVuIn0.example';
        
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [55.5364, -21.1151], // Coordinates of Réunion Island
            zoom: 10
        });

        // Add markers for key locations
        const locations = [
            { name: 'Saint-Denis', coords: [55.4504, -20.8789] },
            { name: 'Saint-Pierre', coords: [55.4781, -21.3393] },
            { name: 'Piton de la Fournaise', coords: [55.7081, -21.2442] },
            { name: 'Cirque de Mafate', coords: [55.4167, -21.0833] }
        ];

        locations.forEach(location => {
            if (location && location.coords && location.name) {
                new mapboxgl.Marker({ color: '#ff6b35' })
                    .setLngLat(location.coords)
                    .setPopup(new mapboxgl.Popup().setHTML(\`<h3>\${location.name}</h3><p>Point d'intérêt ROUTIER 974</p>\`))
                    .addTo(map);
            }
        });

        // Loading screen
        setTimeout(() => {
            document.getElementById('loadingOverlay').style.display = 'none';
        }, 3000);

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-section');
            const speed = scrolled * 0.5;
            parallax.style.transform = 'translateY(' + speed + 'px)';
        });

        // VR initialization
        if (navigator.getVRDisplays) {
            navigator.getVRDisplays().then(displays => {
                if (displays.length > 0) {
                    console.log('VR Display detected:', displays[0].displayName);
                }
            });
        }

        // Analytics tracking
        function trackEvent(eventName, properties) {
            console.log('Event tracked:', eventName, properties);
            // Integration with analytics service would go here
        }

        // Track downloads
        document.querySelectorAll('.platform-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = e.target.textContent.trim();
                trackEvent('download_clicked', { platform: platform });
                alert(\`Téléchargement de ROUTIER 974 pour \${platform} commencé!\`);
            });
        });

        // Dynamic weather system (simulation)
        const weatherStates = ['☀️ Ensoleillé', '🌤️ Nuageux', '🌧️ Pluie tropicale', '⛈️ Orage'];
        let currentWeather = 0;
        
        setInterval(() => {
            currentWeather = (currentWeather + 1) % weatherStates.length;
            console.log('Météo actuelle:', weatherStates[currentWeather]);
        }, 30000);

        // Real-time traffic simulation
        const trafficData = {
            'Route du Littoral': Math.random() > 0.5 ? 'Fluide' : 'Dense',
            'Route des Tamarins': Math.random() > 0.3 ? 'Fluide' : 'Ralenti',
            'Route de Cilaos': Math.random() > 0.7 ? 'Fluide' : 'Difficile'
        };

        console.log('État du trafic:', trafficData);
    </script>
</body>
</html>`
  }

  const generateSite = () => {
    if (isGenerating) return

    setIsGenerating(true)
    setSiteProgress(0)
    setShowFeedback(false)
    setActiveSpecialists([])
    setBuildSteps([])
    setGeneratedFiles([])

    const siteContent = generateRoutier974Site()

    // Simulate 60-second generation with detailed steps
    const steps = [
      "Initialisation du moteur Unity 3D...",
      "Configuration de l'environnement Unreal Engine...",
      "Intégration de l'API Mapbox pour la géolocalisation...",
      "Génération des paysages de l'île de la Réunion...",
      "Création des modèles 3D de camions 974...",
      "Implémentation du système de physique réaliste...",
      "Configuration de la réalité virtuelle (VR)...",
      "Optimisation des textures haute résolution...",
      "Intégration du système de météo tropicale...",
      "Configuration des routes dynamiques...",
      "Implémentation de l'IA de trafic...",
      "Génération des sons d'ambiance créole...",
      "Configuration du système de sauvegarde cloud...",
      "Optimisation pour les plateformes mobiles...",
      "Tests de compatibilité VR/AR...",
      "Finalisation de l'interface utilisateur...",
      "Compilation et optimisation finale...",
      "Génération des fichiers d'export...",
    ]

    let stepIndex = 0
    const stepInterval = setInterval(() => {
      if (stepIndex < steps.length) {
        setCurrentStep(steps[stepIndex])
        setBuildSteps((prev) => [...prev, steps[stepIndex]])
        stepIndex++
      }
    }, 3000) // New step every 3 seconds for 60 seconds total

    // Generate files progressively
    const files = [
      { name: "index.html", type: "HTML", size: "45.2 KB" },
      { name: "unity-engine.js", type: "JavaScript", size: "892.1 KB" },
      { name: "unreal-integration.cpp", type: "C++", size: "234.7 KB" },
      { name: "mapbox-config.json", type: "JSON", size: "12.3 KB" },
      { name: "vr-controller.js", type: "JavaScript", size: "156.8 KB" },
      { name: "physics-engine.wasm", type: "WebAssembly", size: "1.2 MB" },
      { name: "reunion-terrain.fbx", type: "3D Model", size: "3.4 MB" },
      { name: "truck-models.blend", type: "Blender", size: "2.1 MB" },
      { name: "weather-system.hlsl", type: "Shader", size: "67.9 KB" },
      { name: "audio-ambiance.ogg", type: "Audio", size: "4.7 MB" },
      { name: "mobile-optimized.css", type: "CSS", size: "89.4 KB" },
      { name: "cloud-save.php", type: "PHP", size: "23.1 KB" },
      { name: "analytics.js", type: "JavaScript", size: "34.6 KB" },
      { name: "manifest.json", type: "PWA", size: "2.8 KB" },
      { name: "service-worker.js", type: "JavaScript", size: "45.3 KB" },
    ]

    let fileIndex = 0
    const fileInterval = setInterval(() => {
      if (fileIndex < files.length) {
        setGeneratedFiles((prev) => [...prev, files[fileIndex]])
        fileIndex++
      }
    }, 4000) // New file every 4 seconds

    setTimeout(() => {
      clearInterval(stepInterval)
      clearInterval(fileInterval)
      setGeneratedSite(siteContent)
      setIsGenerating(false)
      setShowFeedback(true)
      const randomQuestions = FEEDBACK_QUESTIONS.sort(() => 0.5 - Math.random()).slice(0, 5)
      setFeedbackQuestions(randomQuestions)
    }, 60000) // Exactly 60 seconds
  }

  const exportHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROUTIER 974 SIMULATOR - Exporté par BVK-8.3 AI</title>
    <style>
        ${generatedSite.includes("<style>") ? generatedSite.split("<style>")[1].split("</style>")[0] : ""}
    </style>
</head>
<body>
    ${generatedSite.replace(/<style>.*?<\/style>/s, "")}
    <script>
        console.log('Site généré par BVK-8.3 AI - ROUTIER 974 SIMULATOR');
    </script>
</body>
</html>`

    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `routier-974-simulator-${Date.now()}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Neural Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BVK-8.3 AI
              </div>
              <div className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs border border-cyan-500/30">
                NEURAL INTERFACE v2.0
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Neural Chat
              </button>
              <button
                onClick={() => setActiveView(activeView === "desktop" ? "mobile" : "desktop")}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                {activeView === "desktop" ? "📱 Mobile" : "🖥️ Desktop"} Preview
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Interface */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - AI Specialists */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-6">
              <h2 className="text-xl font-bold mb-4 text-cyan-400">🧠 Spécialistes IA Actifs</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {activeSpecialists.slice(-8).map((specialist, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg border border-cyan-500/20"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-cyan-300">{specialist}</span>
                  </div>
                ))}
              </div>

              {isGenerating && (
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-cyan-300">Construction en cours...</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${siteProgress}%` }}
                    />
                  </div>
                  <div className="text-xs text-cyan-300">
                    {siteProgress.toFixed(1)}% - {currentTask}
                  </div>
                </div>
              )}

              {/* Generated Files */}
              {generatedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">📁 Fichiers Générés</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {generatedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-slate-700/30 rounded border border-purple-500/20"
                      >
                        <span className="text-sm text-purple-300">{file.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-400">{file.type}</span>
                          <span className="text-xs text-cyan-400">{file.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Panel - Main Interface */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  ROUTIER 974 SIMULATOR Generator
                </h1>
                <p className="text-gray-300">Générateur ultra-puissant de sites web avec 300+ spécialistes IA</p>
              </div>

              {/* Input Section */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Décrivez votre projet ROUTIER 974 SIMULATOR..."
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button
                    onClick={generateSite}
                    disabled={isGenerating}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25"
                  >
                    {isGenerating ? "🔄 Génération..." : "🚀 Générer"}
                  </button>
                </div>
              </div>

              {/* Preview Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-cyan-400">🖥️ Prévisualisation Dynamique</h2>
                  {generatedSite && (
                    <button
                      onClick={exportHTML}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-green-500/25"
                    >
                      📥 Exporter HTML
                    </button>
                  )}
                </div>

                <div
                  className={`bg-slate-900 rounded-lg border border-cyan-500/30 overflow-hidden ${activeView === "mobile" ? "max-w-sm mx-auto" : ""}`}
                >
                  {generatedSite ? (
                    <iframe
                      srcDoc={generatedSite}
                      className={`w-full bg-white ${activeView === "mobile" ? "h-96" : "h-[600px]"}`}
                      title="Site Preview"
                    />
                  ) : (
                    <div className="h-96 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🏝️</div>
                        <p>Votre site ROUTIER 974 SIMULATOR apparaîtra ici</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Build Steps */}
              {buildSteps.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">🔧 Étapes de Construction</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {buildSteps.slice(-10).map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-2 bg-slate-700/30 rounded border border-purple-500/20"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-sm text-purple-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Feedback Section */}
              {showFeedback && (
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30 p-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">💬 Amélioration Continue</h3>
                  <p className="text-gray-300 mb-4">Êtes-vous satisfait du site ROUTIER 974 SIMULATOR généré ?</p>

                  <div className="space-y-3 mb-4">
                    {feedbackQuestions.map((question, index) => (
                      <div key={index} className="p-3 bg-slate-700/50 rounded-lg border border-cyan-500/20">
                        <p className="text-cyan-300">{question}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setShowFeedback(false)}
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-green-500/25"
                    >
                      ✅ Parfait !
                    </button>
                    <button
                      onClick={generateSite}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-lg shadow-orange-500/25"
                    >
                      🔄 Améliorer
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">© 2024 BVK-8.3 AI - Générateur Neural Ultra-Puissant</div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-400">500+ Spécialistes IA Quantiques Actifs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-400">Neural Network Ultra-Avancé</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-sm text-purple-400">Quantum Computing Intégré</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
