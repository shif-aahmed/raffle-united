import React, { useState, useRef, useEffect } from 'react';
import './WheelOverlay.css';

const WheelOverlay = ({
  onColorsChange,
  onSoundChange,
  onApplauseSoundChange,
  onBorderStyleChange,
  onPointerStyleChange,
  onThemeChange,
  onTextColorsChange, // For name & ticket number colors
  isOpen: externalIsOpen,
  onOpenChange
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onOpenChange || setInternalIsOpen;
  const [colorInputs, setColorInputs] = useState([
    { value: '#e74c3c', active: false },
    { value: '#3498db', active: false }
  ]);

  const [selectedSound, setSelectedSound] = useState('spin1');
  const [selectedApplause, setSelectedApplause] = useState('applause1');

  const [borderColor, setBorderColor] = useState('#000000');
  const [borderWidth, setBorderWidth] = useState(1);

  const [pointerStyle, setPointerStyle] = useState('arrow');

  // Theme Mode
  const [theme, setTheme] = useState('light');

  // Text Colors
  const [nameTextColor, setNameTextColor] = useState('#ffffff');
  const [ticketTextColor, setTicketTextColor] = useState('#ffffff');

  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = {
    sound: useRef(null),
    applause: useRef(null),
    pointer: useRef(null),
    theme: useRef(null)
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.values(dropdownRefs).forEach(ref => {
        if (ref.current && !ref.current.contains(event.target)) {
          // Don't close if clicking on dropdown menu items
          if (!event.target.closest('.spin-wheel-dropdown-menu')) {
            setOpenDropdown(null);
          }
        }
      });
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const soundOptions = [
    { label: 'Classic Spin', value: 'spin1' },
    { label: 'Fast Spin', value: 'spin2' },
    { label: 'Ticking Spin', value: 'spin3' },
    { label: 'Jar Cap Spinning', value: 'spin4' },
    { label: 'Firecracker Spinning', value: 'spin5' },
    { label: 'Magical Spinning', value: 'spin6' },
    { label: 'Reel Spinning', value: 'spin7' }
  ];

  const applauseSoundOptions = [
    { label: 'Cheering', value: 'applause1' },
    { label: 'Clapping', value: 'applause2' },
    { label: 'Fanfare', value: 'applause3' },
    { label: 'Joke Punchline', value: 'applause4' },
    { label: 'Twinkling Star', value: 'applause5' }
  ];

  const pointerOptions = [
    { label: 'Arrow', value: 'arrow' },
    { label: 'Triangle', value: 'triangle' },
    { label: 'Hand', value: 'hand' }
  ];

  const handleColorChange = (index, value) => {
    const updated = [...colorInputs];
    updated[index].value = value;
    setColorInputs(updated);
  };

  const handleToggle = (index) => {
    const updated = [...colorInputs];
    updated[index].active = !updated[index].active;
    setColorInputs(updated);
  };

  const addColorInput = () => {
    setColorInputs([...colorInputs, { value: '#ffffff', active: false }]);
  };

  const removeColorInput = (index) => {
    const updated = colorInputs.filter((_, i) => i !== index);
    setColorInputs(updated);
  };

  const applyChanges = () => {
    const selectedColors = colorInputs.filter(c => c.active).map(c => c.value);
    onColorsChange?.(selectedColors);
    onSoundChange?.(selectedSound);
    onApplauseSoundChange?.(selectedApplause);
    onBorderStyleChange?.({ color: borderColor, width: borderWidth });
    onPointerStyleChange?.(pointerStyle);
    onThemeChange?.(theme);
    onTextColorsChange?.({
      name: nameTextColor,
      ticket: ticketTextColor
    });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="spin-wheel-overlay-backdrop" onClick={() => setIsOpen(false)}></div>
      <div className={`spin-wheel-overlay-content ${isOpen ? 'spin-wheel-overlay-open' : ''}`}>
        <div className="spin-wheel-overlay-header">
          <h2>Customize Wheel Appearance</h2>
          <button className="spin-wheel-close-button" onClick={() => setIsOpen(false)}>×</button>
        </div>

            <div className="spin-wheel-overlay-body">
              {/* Wheel Colors */}
              {colorInputs.map((color, index) => (
                <div className="spin-wheel-color-row" key={index}>
                  <input
                    type="color"
                    value={color.value}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={color.active}
                      onChange={() => handleToggle(index)}
                    />
                    Use
                  </label>
                  <button className="spin-wheel-remove-btn" onClick={() => removeColorInput(index)}>Remove</button>
                </div>
              ))}
              <button className="spin-wheel-add-btn" onClick={addColorInput}> Add Color</button>

              {/* Spin Sound */}
              <div className="spin-wheel-dropdown-group">
                <h4>Spin Sound</h4>
                <div className="spin-wheel-select-wrapper" ref={dropdownRefs.sound}>
                  <div 
                    className="spin-wheel-custom-select"
                    onClick={() => setOpenDropdown(openDropdown === 'sound' ? null : 'sound')}
                  >
                    {soundOptions.find(opt => opt.value === selectedSound)?.label || 'Select...'}
                    <span className="spin-wheel-dropdown-arrow">▼</span>
                  </div>
                  {openDropdown === 'sound' && (
                    <div className="spin-wheel-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                      {soundOptions.map((opt) => (
                        <div
                          key={opt.value}
                          className={`spin-wheel-dropdown-option ${selectedSound === opt.value ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSound(opt.value);
                            setOpenDropdown(null);
                          }}
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Applause Sound */}
              <div className="spin-wheel-dropdown-group">
                <h4>Applause Sound</h4>
                <div className="spin-wheel-select-wrapper" ref={dropdownRefs.applause}>
                  <div 
                    className="spin-wheel-custom-select"
                    onClick={() => setOpenDropdown(openDropdown === 'applause' ? null : 'applause')}
                  >
                    {applauseSoundOptions.find(opt => opt.value === selectedApplause)?.label || 'Select...'}
                    <span className="spin-wheel-dropdown-arrow">▼</span>
                  </div>
                  {openDropdown === 'applause' && (
                    <div className="spin-wheel-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                      {applauseSoundOptions.map((opt) => (
                        <div
                          key={opt.value}
                          className={`spin-wheel-dropdown-option ${selectedApplause === opt.value ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedApplause(opt.value);
                            setOpenDropdown(null);
                          }}
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Wheel Border */}
              <h4>Wheel Border</h4>
              <div className="spin-wheel-color-row">
                <input
                  type="color"
                  value={borderColor}
                  onChange={(e) => setBorderColor(e.target.value)}
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={borderWidth}
                  onChange={(e) => setBorderWidth(parseInt(e.target.value))}
                  style={{ width: '60px', textAlign: 'center' }}
                />
                <span>px</span>
              </div>

              {/* Pointer Style */}
              <div className="spin-wheel-dropdown-group">
                <h4>Pointer Style</h4>
                <div className="spin-wheel-select-wrapper" ref={dropdownRefs.pointer}>
                  <div 
                    className="spin-wheel-custom-select"
                    onClick={() => setOpenDropdown(openDropdown === 'pointer' ? null : 'pointer')}
                  >
                    {pointerOptions.find(opt => opt.value === pointerStyle)?.label || 'Select...'}
                    <span className="spin-wheel-dropdown-arrow">▼</span>
                  </div>
                  {openDropdown === 'pointer' && (
                    <div className="spin-wheel-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                      {pointerOptions.map(opt => (
                        <div
                          key={opt.value}
                          className={`spin-wheel-dropdown-option ${pointerStyle === opt.value ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPointerStyle(opt.value);
                            setOpenDropdown(null);
                          }}
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Theme */}
              <div className="spin-wheel-dropdown-group">
                <h4>Theme</h4>
                <div className="spin-wheel-select-wrapper" ref={dropdownRefs.theme}>
                  <div 
                    className="spin-wheel-custom-select"
                    onClick={() => setOpenDropdown(openDropdown === 'theme' ? null : 'theme')}
                  >
                    {theme === 'light' ? 'Light' : 'Dark'}
                    <span className="spin-wheel-dropdown-arrow">▼</span>
                  </div>
                  {openDropdown === 'theme' && (
                    <div className="spin-wheel-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                      <div
                        className={`spin-wheel-dropdown-option ${theme === 'light' ? 'selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTheme('light');
                          setOpenDropdown(null);
                        }}
                      >
                        Light
                      </div>
                      <div
                        className={`spin-wheel-dropdown-option ${theme === 'dark' ? 'selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTheme('dark');
                          setOpenDropdown(null);
                        }}
                      >
                        Dark
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Colors */}
              <h4>Text Colors</h4>
              <div className="spin-wheel-color-row">
                <label>Name:</label>
                <input
                  type="color"
                  value={nameTextColor}
                  onChange={(e) => setNameTextColor(e.target.value)}
                />
              </div>
              <div className="spin-wheel-color-row">
                <label>Ticket:</label>
                <input
                  type="color"
                  value={ticketTextColor}
                  onChange={(e) => setTicketTextColor(e.target.value)}
                />
              </div>

              <div style={{ textAlign: 'center', marginTop: '25px' }}>
                <button className="spin-wheel-apply-btn" onClick={applyChanges}> Apply Changes</button>
              </div>
            </div>
        </div>
    </>
  );
};

export default WheelOverlay;

