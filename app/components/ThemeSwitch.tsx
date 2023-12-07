"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Text, Flex, Switch } from "@radix-ui/themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 70, height: 10 }}></div>;
  }

  return (
    <Text as="label" size="2" style={{ width: 70 }}>
      <Flex gap="2">
        <Switch
          size="1"
          defaultChecked
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        />
        {theme === "dark" ? <span>Dark</span> : <span>Light</span>}
      </Flex>
    </Text>
  );
};

export default ThemeSwitch;
