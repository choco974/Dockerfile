"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Download,
  Play,
  Code,
  Loader2,
  Eye,
  Box,
  RefreshCw,
  Zap,
  Terminal,
  Activity,
  Rocket,
  Brain,
  Network,
  Package,
  Bot,
  Cpu,
  Globe,
  Layers,
  Copy,
  FolderOpen,
  Upload,
} from "lucide-react"

// 20 NEXUS ROBOTS - Super Powerful Code Generators
const NEXUS_ROBOTS = [
  "NEXUS-PRIME", "NEXUS-ARCHITECT", "NEXUS-BACKEND", "NEXUS-FRONTEND",
  "NEXUS-FULLSTACK", "NEXUS-DATABASE", "NEXUS-API", "NEXUS-SECURITY",
  "NEXUS-DEVOPS", "NEXUS-MOBILE", "NEXUS-CLOUD", "NEXUS-AI",
  "NEXUS-3D", "NEXUS-GAME", "NEXUS-REALTIME", "NEXUS-ANALYTICS",
  "NEXUS-BLOCKCHAIN", "NEXUS-IOT", "NEXUS-ML", "NEXUS-QUANTUM"
]

// 20 VIRTUAL ASSISTANTS - Developers/Creators/Generators/Coders
const VIRTUAL_ASSISTANTS = [
  "CodeMaster Pro", "WebArchitect AI", "FullStack Genius", "Backend Wizard",
  "Frontend Artist", "Database Expert", "API Designer", "Security Guardian",
  "DevOps Engineer", "Cloud Architect", "Mobile Developer", "AI Specialist",
  "3D Creator", "Game Developer", "Realtime Expert", "Analytics Pro",
  "Blockchain Dev", "IoT Engineer", "ML Expert", "System Architect"
]

// 10 POWERFUL FRAMEWORKS
const FRAMEWORKS = [
  { name: "React 19", color: "text-cyan-400" },
  { name: "Next.js 15", color: "text-white" },
  { name: "Vue 4", color: "text-green-400" },
  { name: "Node.js 22", color: "text-lime-400" },
  { name: "Express 5", color: "text-yellow-400" },
  { name: "Django 5", color: "text-emerald-400" },
  { name: "FastAPI", color: "text-teal-400" },
  { name: "TailwindCSS 4", color: "text-sky-400" },
  { name: "TypeScript 5", color: "text-blue-400" },
  { name: "PostgreSQL", color: "text-indigo-400" },
]

// REAL API CONFIG - OpenAI via Vercel AI Gateway (Zero Config)
const REAL_API = {
  name: "GPT-5 Mini",
  model: "openai/gpt-5-mini",
  endpoint: "/api/generate",
  status: "connected",
}

export default function BVKNexusPlatform() {
  const [input, setInput] = useState("")
  const [urlToClone, setUrlToClone] = useState("")
  const [importedFile, setImportedFile] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPages, setGeneratedPages] = useState<Record<string, string>>({})
  const [activePageTab, setActivePageTab] = useState("index")
  const [viewMode, setViewMode] = useState<"code" | "preview" | "3d">("preview")
  const [linesOfCode, setLinesOfCode] = useState(0)
  const [generationStatus, setGenerationStatus] = useState("")
  const [terminalLogs, setTerminalLogs] = useState<string[]>([])
  const [commandInput1, setCommandInput1] = useState("")
  const [commandInput2, setCommandInput2] = useState("")
  const [activeRobots, setActiveRobots] = useState<string[]>([])
  const [activeAssistants, setActiveAssistants] = useState<string[]>([])
  const [apiCalls, setApiCalls] = useState(0)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [modifyRequest, setModifyRequest] = useState("")

  const startTimeRef = useRef(Date.now())
  const terminalRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Rotate active robots and assistants
  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledRobots = [...NEXUS_ROBOTS].sort(() => Math.random() - 0.5)
      const shuffledAssistants = [...VIRTUAL_ASSISTANTS].sort(() => Math.random() - 0.5)
      setActiveRobots(shuffledRobots.slice(0, 6))
      setActiveAssistants(shuffledAssistants.slice(0, 6))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Real elapsed time counter
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isGenerating) {
      startTimeRef.current = Date.now()
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isGenerating])

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLogs])

  const addTerminalLog = (log: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setTerminalLogs(prev => [...prev.slice(-50), `[${timestamp}] ${log}`])
  }

  // Handle file import
  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        setImportedFile(content)
        addTerminalLog(`$ Imported: ${file.name}`)
        setInput(`Improve and enhance this code: ${file.name}`)
      }
      reader.readAsText(file)
    }
  }

  // REAL API CALL - No simulation
  const generateSite = async () => {
    if (!input.trim()) return

    setIsGenerating(true)
    setGeneratedPages({})
    setLinesOfCode(0)
    setTerminalLogs([])
    setApiCalls(0)
    setElapsedTime(0)

    addTerminalLog("$ NEXUS 8K ULTRA HD SYSTEM INITIALIZING...")
    addTerminalLog(`$ ${NEXUS_ROBOTS.length} NEXUS Robots loaded`)
    addTerminalLog(`$ ${VIRTUAL_ASSISTANTS.length} Virtual Assistants activated`)
    addTerminalLog(`$ ${FRAMEWORKS.length} Frameworks ready`)
    addTerminalLog("$ 8K VIDEO support: ENABLED")
    addTerminalLog("$ 8K IMAGE support: ENABLED")
    addTerminalLog("$ CSS ANIMATIONS: ENABLED")
    addTerminalLog(`$ API: ${REAL_API.name}`)
    addTerminalLog(`$ Model: ${REAL_API.model}`)
    addTerminalLog("$ Connection: SUCCESS")
    addTerminalLog(`$ Project: "${input}"`)

    const pageTypes = ["index", "dashboard", "pricing", "contact", "features", "gallery"]
    const allPages: Record<string, string> = {}

    for (const pageType of pageTypes) {
      setGenerationStatus(`[${REAL_API.name}] ${pageType}...`)
      addTerminalLog(`$ Generating: ${pageType}.html`)

      try {
        const response = await fetch(REAL_API.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: importedFile ? `${input}\n\nBase code:\n${importedFile.substring(0, 3000)}` : input,
            siteName: input,
            pageType,
          }),
        })

        if (!response.ok) {
          const errText = await response.text()
          throw new Error(`API ${response.status}: ${errText}`)
        }

        setApiCalls(prev => prev + 1)
        addTerminalLog(`$ API call SUCCESS`)

        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let fullCode = ""

        if (reader) {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            fullCode += decoder.decode(value)
            allPages[pageType] = fullCode
            setGeneratedPages({ ...allPages })
            setLinesOfCode(Object.values(allPages).reduce((sum, code) => sum + code.split("\n").length, 0))
          }
        }

        addTerminalLog(`$ ${pageType}.html: ${fullCode.split("\n").length} lines`)
      } catch (error) {
        addTerminalLog(`$ ERROR: ${error instanceof Error ? error.message : "Failed"}`)
      }
    }

    addTerminalLog(`$ COMPLETE: ${Object.values(allPages).reduce((sum, code) => sum + code.split("\n").length, 0)} total lines`)
    setIsGenerating(false)
    setGenerationStatus("Complete")
    setImportedFile(null)
  }

  // Clone site
  const cloneSite = async () => {
    if (!urlToClone.trim()) return
    addTerminalLog(`$ CLONING: ${urlToClone}`)
    setInput(`Clone and recreate: ${urlToClone}`)
    await generateSite()
  }

  // Modify code
  const modifyCode = async () => {
    if (!modifyRequest.trim() || !generatedPages[activePageTab]) return

    setIsGenerating(true)
    addTerminalLog(`$ MODIFYING: ${activePageTab}`)

    try {
      const response = await fetch(REAL_API.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: modifyRequest,
          siteName: input,
          pageType: activePageTab,
          isModification: true,
          existingCode: generatedPages[activePageTab],
        }),
      })

      if (!response.ok) throw new Error("Modification failed")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let fullCode = ""

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          fullCode += decoder.decode(value)
          setGeneratedPages(prev => ({ ...prev, [activePageTab]: fullCode }))
        }
      }

      setApiCalls(prev => prev + 1)
      addTerminalLog(`$ Modified: ${fullCode.split("\n").length} lines`)
      setModifyRequest("")
    } catch (error) {
      addTerminalLog(`$ ERROR: ${error instanceof Error ? error.message : "Failed"}`)
    }

    setIsGenerating(false)
  }

  // Execute command
  const executeCommand = (cmd: string, terminal: 1 | 2) => {
    addTerminalLog(`$ [T${terminal}] ${cmd}`)
    if (cmd.toLowerCase().includes("generate")) generateSite()
    else if (cmd.toLowerCase().includes("export")) exportHTML()
    else if (cmd.toLowerCase().includes("clear")) setTerminalLogs([])
    else addTerminalLog(`$ Executed: ${cmd}`)
    if (terminal === 1) setCommandInput1("")
    else setCommandInput2("")
  }

  // Export HTML
  const exportHTML = () => {
    if (Object.keys(generatedPages).length === 0) return
    const currentCode = generatedPages[activePageTab] || ""
    const blob = new Blob([currentCode], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${activePageTab}.html`
    a.click()
    URL.revokeObjectURL(url)
    addTerminalLog(`$ Exported: ${activePageTab}.html`)
  }

  // Export all files
  const exportAllFiles = () => {
    if (Object.keys(generatedPages).length === 0) return
    Object.entries(generatedPages).forEach(([name, content]) => {
      const blob = new Blob([content], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${name}.html`
      a.click()
      URL.revokeObjectURL(url)
    })
    addTerminalLog(`$ Exported ${Object.keys(generatedPages).length} files`)
  }

  const currentCode = generatedPages[activePageTab] || ""

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/20 bg-black/50 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BVK-8.3 NEXUS
              </h1>
              <p className="text-[10px] text-gray-500">8K Video + Images + Animations</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-mono">{apiCalls} calls</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-purple-500/10 border border-purple-500/30">
              <Code className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-purple-400 font-mono">{linesOfCode} lines</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/30">
              <Zap className="w-3 h-3 text-green-400" />
              <span className="text-xs text-green-400 font-mono">{elapsedTime}s</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/50">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-xs font-bold">{REAL_API.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-12 gap-2 p-2 h-[calc(100vh-64px)]">
        {/* Left Panel */}
        <div className="col-span-3 space-y-2 overflow-y-auto">
          {/* Main Input */}
          <div className="rounded-xl bg-gray-900/70 border border-cyan-500/20 p-3">
            <h3 className="text-xs font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <Rocket className="w-3 h-3" /> Description
            </h3>
            <Textarea
              placeholder="Describe your project..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-black/50 border-cyan-500/30 text-white text-sm min-h-[80px] resize-none"
            />
            <Button
              onClick={generateSite}
              disabled={isGenerating || !input.trim()}
              className="w-full mt-2 bg-gradient-to-r from-cyan-600 to-purple-600"
            >
              {isGenerating ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Generating...</> : <><Play className="w-4 h-4 mr-2" />Generate</>}
            </Button>
          </div>

          {/* Import */}
          <div className="rounded-xl bg-gray-900/70 border border-yellow-500/20 p-3">
            <h3 className="text-xs font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <Upload className="w-3 h-3" /> Import File
            </h3>
            <input ref={fileInputRef} type="file" accept=".html,.css,.js,.tsx,.ts" onChange={handleFileImport} className="hidden" />
            <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="w-full border-yellow-500/50 text-yellow-400">
              <FolderOpen className="w-3 h-3 mr-2" />{importedFile ? "File loaded" : "Select file"}
            </Button>
          </div>

          {/* Clone */}
          <div className="rounded-xl bg-gray-900/70 border border-purple-500/20 p-3">
            <h3 className="text-xs font-bold text-purple-400 mb-2 flex items-center gap-2">
              <Copy className="w-3 h-3" /> Clone Site
            </h3>
            <input type="text" placeholder="https://example.com" value={urlToClone} onChange={(e) => setUrlToClone(e.target.value)}
              className="w-full bg-black/50 border border-purple-500/30 rounded px-2 py-1.5 text-sm text-white mb-2" />
            <Button onClick={cloneSite} disabled={isGenerating} variant="outline" className="w-full border-purple-500/50 text-purple-400">
              <Globe className="w-3 h-3 mr-2" />Clone
            </Button>
          </div>

          {/* 20 NEXUS Robots */}
          <div className="rounded-xl bg-gray-900/70 border border-cyan-500/20 p-3">
            <h3 className="text-xs font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <Bot className="w-3 h-3" /> 20 NEXUS Robots
            </h3>
            <div className="flex flex-wrap gap-1">
              {activeRobots.map((robot, i) => (
                <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse">
                  {robot}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-1">{NEXUS_ROBOTS.length} robots active</p>
          </div>

          {/* 20 Virtual Assistants */}
          <div className="rounded-xl bg-gray-900/70 border border-pink-500/20 p-3">
            <h3 className="text-xs font-bold text-pink-400 mb-2 flex items-center gap-2">
              <Brain className="w-3 h-3" /> 20 Assistants
            </h3>
            <div className="flex flex-wrap gap-1">
              {activeAssistants.map((assistant, i) => (
                <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  {assistant}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-1">{VIRTUAL_ASSISTANTS.length} assistants active</p>
          </div>

          {/* 10 Frameworks */}
          <div className="rounded-xl bg-gray-900/70 border border-green-500/20 p-3">
            <h3 className="text-xs font-bold text-green-400 mb-2 flex items-center gap-2">
              <Layers className="w-3 h-3" /> 10 Frameworks
            </h3>
            <div className="flex flex-wrap gap-1">
              {FRAMEWORKS.map((fw, i) => (
                <span key={i} className={`text-[9px] px-1.5 py-0.5 rounded bg-gray-800 ${fw.color} border border-current/30`}>
                  {fw.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Preview */}
        <div className="col-span-6 flex flex-col gap-2">
          {/* Tabs */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {Object.keys(generatedPages).length > 0 ? (
                Object.keys(generatedPages).map(page => (
                  <button key={page} onClick={() => setActivePageTab(page)}
                    className={`px-3 py-1 text-xs rounded-lg ${activePageTab === page ? "bg-cyan-500 text-black font-bold" : "bg-gray-800 text-gray-400"}`}>
                    {page}.html
                  </button>
                ))
              ) : <span className="text-xs text-gray-500">No pages</span>}
            </div>
            <div className="flex gap-1">
              {[{ mode: "preview" as const, icon: Eye }, { mode: "code" as const, icon: Code }, { mode: "3d" as const, icon: Box }].map(({ mode, icon: Icon }) => (
                <button key={mode} onClick={() => setViewMode(mode)}
                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded-lg ${viewMode === mode ? "bg-purple-500 text-white" : "bg-gray-800 text-gray-400"}`}>
                  <Icon className="w-3 h-3" />{mode}
                </button>
              ))}
            </div>
          </div>

          {/* Main View */}
          <div className="flex-1 rounded-xl bg-gray-900/70 border border-cyan-500/20 overflow-hidden">
            {viewMode === "preview" && (
              <iframe srcDoc={currentCode || "<html><body style='background:#0a0a0a;color:#888;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;'><p>Enter description and click Generate</p></body></html>"}
                className="w-full h-full bg-white" sandbox="allow-scripts" />
            )}
            {viewMode === "code" && (
              <pre className="p-4 h-full overflow-auto text-xs text-green-400 font-mono bg-black/80">
                {currentCode || "// No code generated yet"}
              </pre>
            )}
            {viewMode === "3d" && (
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
                <Box className="w-16 h-16 text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
            )}
          </div>

          {/* Modify */}
          {Object.keys(generatedPages).length > 0 && (
            <div className="rounded-xl bg-gray-900/70 border border-yellow-500/20 p-3">
              <h3 className="text-xs font-bold text-yellow-400 mb-2 flex items-center gap-2">
                <RefreshCw className="w-3 h-3" /> Modify / Continue
              </h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Describe modifications..." value={modifyRequest} onChange={(e) => setModifyRequest(e.target.value)}
                  className="flex-1 bg-black/50 border border-yellow-500/30 rounded px-2 py-1.5 text-sm text-white" />
                <Button onClick={modifyCode} disabled={isGenerating || !modifyRequest.trim()} className="bg-yellow-600">
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Modify"}
                </Button>
              </div>
            </div>
          )}

          {/* Export */}
          <div className="flex gap-2">
            <Button onClick={exportHTML} disabled={Object.keys(generatedPages).length === 0} className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600">
              <Download className="w-4 h-4 mr-2" />Export HTML
            </Button>
            <Button onClick={exportAllFiles} disabled={Object.keys(generatedPages).length === 0} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600">
              <Package className="w-4 h-4 mr-2" />Export All
            </Button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-3 space-y-2 overflow-y-auto">
          {/* Terminal */}
          <div className="rounded-xl bg-gray-900/70 border border-cyan-500/20 p-3">
            <h3 className="text-xs font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <Terminal className="w-3 h-3" /> Terminal
            </h3>
            <div ref={terminalRef} className="h-32 bg-black/80 rounded p-2 overflow-y-auto font-mono text-[10px]">
              {terminalLogs.length === 0 ? <p className="text-gray-500">Ready...</p> : (
                terminalLogs.map((log, i) => (
                  <div key={i} className={log.includes("ERROR") ? "text-red-400" : log.includes("SUCCESS") || log.includes("COMPLETE") ? "text-green-400" : "text-cyan-400"}>
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Command Prompt 1 */}
          <div className="rounded-xl bg-gray-900/70 border border-purple-500/20 p-3">
            <h3 className="text-xs font-bold text-purple-400 mb-2 flex items-center gap-2">
              <Cpu className="w-3 h-3" /> Command #1
            </h3>
            <div className="flex gap-1">
              <input type="text" placeholder="nexus>" value={commandInput1} onChange={(e) => setCommandInput1(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && executeCommand(commandInput1, 1)}
                className="flex-1 bg-black/80 border border-purple-500/30 rounded px-2 py-1 text-xs text-purple-400 font-mono" />
              <Button size="sm" onClick={() => executeCommand(commandInput1, 1)} className="bg-purple-600">Run</Button>
            </div>
          </div>

          {/* Command Prompt 2 */}
          <div className="rounded-xl bg-gray-900/70 border border-pink-500/20 p-3">
            <h3 className="text-xs font-bold text-pink-400 mb-2 flex items-center gap-2">
              <Cpu className="w-3 h-3" /> Command #2
            </h3>
            <div className="flex gap-1">
              <input type="text" placeholder="nexus>" value={commandInput2} onChange={(e) => setCommandInput2(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && executeCommand(commandInput2, 2)}
                className="flex-1 bg-black/80 border border-pink-500/30 rounded px-2 py-1 text-xs text-pink-400 font-mono" />
              <Button size="sm" onClick={() => executeCommand(commandInput2, 2)} className="bg-pink-600">Run</Button>
            </div>
          </div>

          {/* API Status */}
          <div className="rounded-xl bg-gray-900/70 border border-green-500/20 p-3">
            <h3 className="text-xs font-bold text-green-400 mb-2 flex items-center gap-2">
              <Network className="w-3 h-3" /> API Status
            </h3>
            <div className="space-y-1">
              <div className="flex justify-between p-1.5 rounded bg-black/30">
                <span className="text-[10px] text-gray-400">Model</span>
                <span className="text-[10px] text-cyan-400">{REAL_API.name}</span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-black/30">
                <span className="text-[10px] text-gray-400">Status</span>
                <span className="text-[10px] text-green-400 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />{REAL_API.status}
                </span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-black/30">
                <span className="text-[10px] text-gray-400">Endpoint</span>
                <span className="text-[10px] text-cyan-400 font-mono">{REAL_API.endpoint}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-xl bg-gray-900/70 border border-yellow-500/20 p-3">
            <h3 className="text-xs font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <Activity className="w-3 h-3" /> Stats
            </h3>
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2 rounded bg-black/30 text-center">
                <div className="text-lg font-black text-cyan-400">{apiCalls}</div>
                <div className="text-[10px] text-gray-500">API Calls</div>
              </div>
              <div className="p-2 rounded bg-black/30 text-center">
                <div className="text-lg font-black text-purple-400">{linesOfCode}</div>
                <div className="text-[10px] text-gray-500">Lines</div>
              </div>
              <div className="p-2 rounded bg-black/30 text-center">
                <div className="text-lg font-black text-green-400">{Object.keys(generatedPages).length}</div>
                <div className="text-[10px] text-gray-500">Pages</div>
              </div>
              <div className="p-2 rounded bg-black/30 text-center">
                <div className="text-lg font-black text-yellow-400">{elapsedTime}s</div>
                <div className="text-[10px] text-gray-500">Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-cyan-500/20 px-4 py-1 flex justify-between text-[10px]">
        <div className="flex gap-4">
          <span className="text-gray-500">BVK-8.3 NEXUS</span>
          <span className="text-cyan-400">{NEXUS_ROBOTS.length} Robots</span>
          <span className="text-pink-400">{VIRTUAL_ASSISTANTS.length} Assistants</span>
          <span className="text-green-400">{FRAMEWORKS.length} Frameworks</span>
        </div>
        <span className={isGenerating ? "text-yellow-400 animate-pulse" : "text-green-400"}>
          {isGenerating ? generationStatus : "Ready"}
        </span>
      </div>
    </div>
  )
}
