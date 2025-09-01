import { useEffect, useState } from "react";

export default function useTypewriter({ words = [], typingSpeed = 100, deletingSpeed = 50, pause = 1500 }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    let mounted = true;
    let timeoutId = null;

    const tick = () => {
      const full = words[wordIndex];
      if (isDeleting) {
        const updated = full.substring(0, text.length - 1);
        if (mounted) setText(updated);
        if (updated === "") {
          if (mounted) {
            setIsDeleting(false);
            setWordIndex((wi) => (wi + 1) % words.length);
          }
        }
        timeoutId = setTimeout(tick, deletingSpeed);
      } else {
        const updated = full.substring(0, text.length + 1);
        if (mounted) setText(updated);
        if (updated === full) {
          timeoutId = setTimeout(() => {
            if (mounted) setIsDeleting(true);
          }, pause);
        } else {
          timeoutId = setTimeout(tick, typingSpeed);
        }
      }
    };

    timeoutId = setTimeout(tick, typingSpeed);
    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}