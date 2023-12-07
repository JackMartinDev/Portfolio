import { Group, ActionIcon, Image } from '@mantine/core';
import { useState } from 'react';

function LanguageSwitch() {
    const [language, setLanguage] = useState("en")

    return(    
        <Group justify="center">
            <ActionIcon
                variant="subtle"
                onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}
                size="xl"
                aria-label="Toggle color scheme"
            >
                <Image src={language === "jp" ? "/icons/GB.png" : "/icons/JP.png"}/>
            </ActionIcon>
        </Group>)
}
export default LanguageSwitch
