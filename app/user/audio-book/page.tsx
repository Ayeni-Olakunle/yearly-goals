// "use client";

// import { useState, useEffect, useRef } from "react";
// import { FaRegCirclePlay, FaCirclePause } from "react-icons/fa6";

// const CHUNK_SIZE = 200; // Approximate character limit per chunk

// const Home = () => {
//   const [text, setText] = useState<string>("");
//   const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const [progress, setProgress] = useState<number>(0);
//   const utteranceQueue = useRef<SpeechSynthesisUtterance[]>([]);

//   const splitTextIntoChunks = (input: string): string[] => {
//     const chunks: string[] = [];
//     let start = 0;

//     while (start < input.length) {
//       let end = Math.min(start + CHUNK_SIZE, input.length);
//       if (end < input.length && input[end] !== " ") {
//         end = input.lastIndexOf(" ", end);
//         if (end === -1) end = start + CHUNK_SIZE;
//       }
//       chunks.push(input.slice(start, end).trim());
//       start = end;
//     }
//     return chunks;
//   };

//   const speakChunk = (chunkIndex: number) => {
//     if (chunkIndex >= utteranceQueue.current.length) {
//       setIsSpeaking(false);
//       setProgress(100);
//       return;
//     }

//     const utterance = utteranceQueue.current[chunkIndex];
//     const totalChunks = utteranceQueue.current.length;

//     utterance.onend = () => {
//       setProgress(((chunkIndex + 1) / totalChunks) * 100);
//       speakChunk(chunkIndex + 1);
//     };

//     utterance.onerror = () => {
//       alert("An error occurred during speech synthesis.");
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(utterance);
//   };

//   const handleToggleSpeak = () => {
//     if (!text.trim()) {
//       alert("Please enter some text!");
//       return;
//     }

//     if ("speechSynthesis" in window) {
//       if (!isSpeaking) {
//         // Start speaking
//         const chunks = splitTextIntoChunks(text);
//         utteranceQueue.current = chunks.map((chunk) => {
//           const utterance = new SpeechSynthesisUtterance(chunk);
//           return utterance;
//         });

//         setIsSpeaking(true);
//         setProgress(0);
//         speakChunk(0);
//       } else if (isPaused) {
//         // Resume speaking
//         window.speechSynthesis.resume();
//         setIsPaused(false);
//       } else {
//         // Pause speaking
//         window.speechSynthesis.pause();
//         setIsPaused(true);
//       }
//     } else {
//       alert("Sorry, your browser does not support Text-to-Speech.");
//     }
//   };

//   useEffect(() => {
//     return () => {
//       window.speechSynthesis.cancel();
//     };
//   }, []);

//   return (
//     <div className="w-full flex justify-center items-center">
//       <div className="flex justify-center items-center flex-col gap-[10px] w-3/5 mt-[50px]">
//         <textarea
//           rows={5}
//           placeholder="Enter text here..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="w-full bg-[rgb(239,_239,_239)] p-[15px] rounded-[5px] h-[400px] outline-none"
//         ></textarea>
//         <div>
//           <button onClick={handleToggleSpeak}>
//             {!isSpeaking || isPaused ? (
//               <FaRegCirclePlay className="text-[40px] text-[#407bff]" />
//             ) : (
//               <FaCirclePause className="text-[40px] text-[#ff6347]" />
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";

import { useState, useEffect, useRef } from "react";
import { FaRegCirclePlay, FaCirclePause } from "react-icons/fa6";

const Home = () => {
  const [text, setText] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  const utteranceQueue = useRef<SpeechSynthesisUtterance[]>([]);

  useEffect(() => {
    // Fetch available voices
    const fetchVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      // Set a default voice
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    // Fetch voices and update when voices change
    fetchVoices();
    window.speechSynthesis.onvoiceschanged = fetchVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleToggleSpeak = () => {
    if (!text.trim()) {
      alert("Please enter some text!");
      return;
    }

    if ("speechSynthesis" in window) {
      if (!isSpeaking) {
        // Create utterances and set voice
        const utterances = text.split(/\.\s*/).map((sentence) => {
          const utterance = new SpeechSynthesisUtterance(sentence);
          const voice = voices.find((v) => v.name === selectedVoice);
          if (voice) utterance.voice = voice;
          return utterance;
        });

        utteranceQueue.current = utterances;

        setIsSpeaking(true);
        setProgress(0);
        speakChunk(0);
      } else if (isPaused) {
        // Resume speaking
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        // Pause speaking
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      alert("Sorry, your browser does not support Text-to-Speech.");
    }
  };

  const speakChunk = (chunkIndex: number) => {
    if (chunkIndex >= utteranceQueue.current.length) {
      setIsSpeaking(false);
      setProgress(100);
      return;
    }

    const utterance = utteranceQueue.current[chunkIndex];
    const totalChunks = utteranceQueue.current.length;

    utterance.onend = () => {
      setProgress(((chunkIndex + 1) / totalChunks) * 100);
      speakChunk(chunkIndex + 1);
    };

    utterance.onerror = () => {
      alert("An error occurred during speech synthesis.");
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-[20px] w-3/5 mt-[50px]">
        <textarea
          rows={5}
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-[rgb(239,_239,_239)] p-[15px] rounded-[5px] h-[400px] outline-none"
        ></textarea>
        <div className="flex gap-[15px] items-center">
          <label htmlFor="voice-select" className="text-[#494949]">
            Select Voice:
          </label>
          <select
            id="voice-select"
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
            className="bg-[#efefef] p-[10px] rounded-[50px] text-[#5d5d5d]"
          >
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} {voice.lang}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex justify-between items-center">
          <button onClick={handleToggleSpeak}>
            {!isSpeaking || isPaused ? (
              <FaRegCirclePlay className="text-[40px] text-[#407bff]" />
            ) : (
              <FaCirclePause className="text-[40px] text-[#ff6347]" />
            )}
          </button>
          <div className="w-[90%]">
            <div className="h-[10px] bg-[rgb(224,_224,_224)] rounded-[5px] overflow-hidden">
              <div
                className={`h-full w-[${progress}%] bg-[rgb(0,_112,_243)] [transition:width_0.3s_linear]`}
              ></div>
            </div>
            <p className="mt-2 text-sm">Progress: {progress.toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
