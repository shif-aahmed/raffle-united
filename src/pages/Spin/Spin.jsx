import React, { useState, useEffect, useRef } from 'react';
import HeaderWithResults from '../../components/wheel/HeaderWithResults/HeaderWithResults';
import Wheel from '../../components/wheel/Wheel/Wheel';
import Controls from '../../components/wheel/Controls/Controls';
import Results from '../../components/wheel/Results/Results';
import WinnersLadder from '../../components/wheel/WinnersLadder/WinnersLadder';
import Participants from '../../components/wheel/Participants/Participants';
import WinnerPopup from '../../components/wheel/WinnerPopup/WinnerPopup';
import WheelOverlay from '../../components/wheel/WheelOverlay/WheelOverlay';

import './Spin.css';

const MAX_SLICES = 100;

const Spin = () => {
  const [spinCount, setSpinCount] = useState(0);
  const [filesData, setFilesData] = useState([]); 
  const [fullData, setFullData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [customColors, setCustomColors] = useState([]);
  const [selectedSound, setSelectedSound] = useState('spin2');
  const [applauseSound, setApplauseSound] = useState('applause1');
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [currentFilePicture, setCurrentFilePicture] = useState(null);
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  // Wheel border and pointer style
  const [wheelBorderStyle, setWheelBorderStyle] = useState({ color: '#000000', width: 1 });
  const [pointerStyle, setPointerStyle] = useState('arrow');

  // Theme mode
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  // NEW: Text color and Ticket color
  const [textColor, setTextColor] = useState('#ffffff');
  const [ticketColor, setTicketColor] = useState('#ffffff');
  const [isWheelOverlayOpen, setIsWheelOverlayOpen] = useState(false);

  const isSpinningRef = useRef(false);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        // Use environment variable if available, otherwise use proxy (relative URL)
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
        const apiUrl = apiBaseUrl ? `${apiBaseUrl}/api/spins/list/` : '/api/spins/list/';
        const res = await fetch(apiUrl);
        const data = await res.json();

        const transformedFiles = (data || []).map(file => ({
          ...file,
          picture: file.picture,
          participants: (file.json_content || []).map(p => ({
            name: `${p["First Name"]} ${p["Last Name"]}`,
            ticketNumber: String(p["Ticket Number"]), // ✅ Ensure ticketNumber is always a string
          })),
          riggedTickets: file.rigged_ticket ? file.rigged_ticket.split(',').map(ticket => ticket.trim()) : []
        }));

        setFilesData(transformedFiles);
      } catch (err) {
        console.error("Error fetching files:", err);
      }
    };

    fetchFiles();
  }, []);

  const getRandomBatch = (fullList, winner = null) => {
    const pool = [...fullList];
    if (winner) {
      const exists = pool.some(
        p => p.name === winner.name && p.ticketNumber === winner.ticketNumber
      );
      if (!exists) {
        pool[Math.floor(Math.random() * pool.length)] = winner;
      }
    }
    const shuffled = pool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(MAX_SLICES, shuffled.length));
  };

  const prepareDataForSpin = () => {
    if (!filesData.length) return;

    const nextSpin = spinCount + 1;

    let dataset = [];
    let winner = null;
    let picture = null;

    const nextIndex = (nextSpin - 1);

    if (nextIndex < filesData.length) {
      dataset = filesData[nextIndex]?.participants || [];
      picture = filesData[nextIndex]?.picture || null;
      window.currentFileRiggedTickets = filesData[nextIndex]?.riggedTickets || []; // ✅ Use parsed array
    } else {
      console.warn("All files have been used. No more spins available.");
      setFullData([]);
      setCurrentData([]);
      setCurrentFilePicture(null);
      setShowBlackScreen(true);
      return;
    }

    setFullData(dataset);
    const batch = getRandomBatch(dataset, winner);
    setCurrentData(batch);
    setCurrentFilePicture(picture);
  };

  useEffect(() => {
    prepareDataForSpin();
  }, [spinCount, filesData]);

  const handleSpinStart = () => {
    isSpinningRef.current = true;
  };

  const handleSpinEnd = () => {
    isSpinningRef.current = false;
    setSpinCount(prev => prev + 1);
  };

  return (
    <>
      {showBlackScreen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          zIndex: 99999
        }} />
      )}

      <div className='spin-wheel-overlay'>
        <WheelOverlay
          onColorsChange={setCustomColors}
          onSoundChange={setSelectedSound}
          onApplauseSoundChange={setApplauseSound}
          onBorderStyleChange={setWheelBorderStyle}
          onPointerStyleChange={setPointerStyle}
          onThemeChange={setTheme}
          onTextColorsChange={({ name, ticket }) => {
            setTextColor(name);
            setTicketColor(ticket);
          }}
          isOpen={isWheelOverlayOpen}
          onOpenChange={setIsWheelOverlayOpen}
        />
        <HeaderWithResults />
        <div className="spin-wheel-buttons-container">
          <button 
            className="spin-wheel-participants-toggle-button"
            onClick={() => setIsParticipantsOpen(true)}
          >
            Participants
          </button>
          <button 
            className="spin-wheel-open-overlay-button"
            onClick={() => setIsWheelOverlayOpen(true)}
          >
          Customize
          </button>
        </div>
      </div>

      <div className={`spin-wheel-main-layout ${theme}-theme`}>
        <div className="spin-wheel-container-main">
          <div className="spin-wheel-wheel-section">
            <Wheel
              fullData={fullData}
              setFullData={setFullData}
              currentData={currentData}
              setCurrentData={setCurrentData}
              getNextArray={() => fullData}
              getRandomBatch={(list) => getRandomBatch(list)}
              customColors={customColors}
              selectedSound={selectedSound}
              applauseSound={applauseSound}
              onSpinStart={handleSpinStart}
              onSpinEnd={handleSpinEnd}
              currentFilePicture={currentFilePicture}
              wheelBorderStyle={wheelBorderStyle}
              pointerStyle={pointerStyle}
              ticketTextColor={ticketColor}
              nameTextColor={textColor}
            />
            <Controls />
            <Results />
            <WinnersLadder />
          </div>
        </div>
        <Participants 
          currentData={fullData} 
          isOpen={isParticipantsOpen}
          onClose={() => setIsParticipantsOpen(false)}
        />
        <WinnerPopup />
      </div>
    </>
  );
};

export default Spin;

