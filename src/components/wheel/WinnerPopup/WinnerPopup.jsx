import { useEffect } from 'react';
import './WinnerPopup.css';
const WinnerPopup = () => {
  useEffect(() => {
    const popup = document.getElementById('winnerPopup');
    const closeBtn = popup?.querySelector('.spin-wheel-close-popup');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';

        const spinBtn = document.getElementById('spinBtn');
        const resetBtn = document.getElementById('resetBtn');
        if (spinBtn) spinBtn.disabled = false;
        if (resetBtn) resetBtn.disabled = false;
      });
    }
  }, []);

  return (
    <div className="spin-wheel-winner-popup" id="winnerPopup" style={{ display: 'none' }}>
      <span className="spin-wheel-close-popup" style={{ cursor: 'pointer' }}>&times;</span>
      <h3>🎉 Winner! 🎉</h3>
      <div className="spin-wheel-winner-name" id="popupWinnerName"></div>
      <div className="spin-wheel-winner-combination" id="popupCombination" style={{display: 'none'}}></div>
      <div id="popupWinnerDetails"></div>
    </div>
  );
};

export default WinnerPopup;

