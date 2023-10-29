'use client'

import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Play } from 'lucide-react';



const CanvasButton = ({ }) => {

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const handleConfetti = () => {
        confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 100),
            origin: { y: 0.6 }
        });
    };
    return (
        <Button
            disableRipple
            onPress={handleConfetti}
            className="absolute overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0">
            <Play className='' />
        </Button>
    )
}

export default CanvasButton