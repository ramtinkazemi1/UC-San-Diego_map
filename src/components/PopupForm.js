import React, { useState, useRef, useEffect } from 'react';

const PopupForm = ({ location, onClose, position }) => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [sendTo, setSendTo] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const [popupPosition, setPopupPosition] = useState(position);
  const ref = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      issueType,
      description,
      urgencyLevel,
      sendTo,
      location: {
        latitude: location.lat,
        longitude: location.lng,
      },
    };

    try {
      // const response = await fetch('http://localhost:3000/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });

      const response = await fetch('http://localhost:5000/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const responseData = await response.json();
        console.log(responseData);
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 3000);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    setDragging(true);
    setRel({
      x: e.pageX - popupPosition.x,
      y: e.pageY - popupPosition.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = (e) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPopupPosition({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    const onMouseMoveListener = (e) => onMouseMove(e);
    const onMouseUpListener = (e) => onMouseUp(e);

    if (dragging) {
      document.addEventListener('mousemove', onMouseMoveListener);
      document.addEventListener('mouseup', onMouseUpListener);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMoveListener);
      document.removeEventListener('mouseup', onMouseUpListener);
    };
  }, [dragging]);



  return (
    <div 
      ref={ref}
      onMouseDown={onMouseDown}
      className="popup" 
      style={{
        backgroundColor: '#e3f2fd',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0px 10px 20px rgba(0,0,0,0.19)',
        maxWidth: '700px',
        maxHeight: "500px",
        position: 'fixed',
        zIndex: 1,
        // top: `${position.y}px`,
        // left: `${position.x}px`,
        top: `${popupPosition.y}px`,
        left: `${popupPosition.x}px`,
        transform: 'translate(-50%, calc(-100% - 40px))',
        textAlign: 'center',
      }}
    >
      {!submitted ? (
        <div>
          <button 
            onClick={onClose} 
            style={{
              position: 'absolute',
              top: '5px',
              right: '10px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '50%',
              padding: '5px',
              fontSize: '20px',
              cursor: 'pointer',
              boxShadow: '0px 5px 10px rgba(0,0,0,0.19)',
            }}
          >
            X
          </button>
          <form onSubmit={onSubmit}>
            <fieldset style={{border: 'none'}}>
              <legend>Issue:</legend>
              <input value={issueType} onChange={e => setIssueType(e.target.value)} />
            </fieldset>
            <fieldset style={{border: 'none'}}>
              <legend>Description:</legend>
              <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </fieldset>
            <fieldset style={{border: 'none'}}>
              <legend>Urgency Level:</legend>
              <select value={urgencyLevel} onChange={e => setUrgencyLevel(e.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="1">Non Urgent</option>
                <option value="2">Moderate</option>
                <option value="3">Important</option>
                <option value="4">Urgent</option>
                <option value="5">Very Urgent</option>
              </select>
            </fieldset>
            <fieldset style={{border: 'none'}}>
              <legend>Send To:</legend>
              <select value={sendTo} onChange={e => setSendTo(e.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="OSD">OSD OFFICE</option>
                <option value="RMP">RMP</option>
                <option value="KHOSLA">KHOSLA</option>
                <option value="NOT SURE!">NOT SURE!</option>
              </select>
            </fieldset>
            <center><button type="submit">Submit</button></center>
          </form>
        </div>
      ) : (
        <h2>Thank you for your report! We will resolve this shortly</h2>
      )}
    </div>
  );
};

export default PopupForm;
