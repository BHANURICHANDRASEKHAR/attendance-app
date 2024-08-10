import React from 'react';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const WhatsAppShareButton = ({ handleCopy }) => {
    const handleClick = () => {
        const text=handleCopy();
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, '_blank');
    };
    return (
        <Button 
        type="primary" 
        icon={<WhatsAppOutlined />} 
        onClick={handleClick}
        style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
    >
        Post on WhatsApp
    </Button>
    );
};

export default WhatsAppShareButton;
