---
title: "Act.IO"
slug: "act-io"
info:
  name: ".act-io"
  type: "Personal"
  role: "full-stack engineer"
  status: "ongoing"
tags:
  - "Typescript"
  - "React Native"
  - "Python"
  - "Flask"
  - "Git"
  - "Jest"
pictures:
  - "/Projects/actio/2.png"
  - "/Projects/actio/3.png"
  - "/Projects/actio/4.png"
  - "/Projects/actio/5.png"
  - "/Projects/actio/6.png"
link: ""
---

Act.IO is an accessibility-driven project designed to help users with limited dexterity and mobility challenges interface more effectively with their computers. It is a cross-platform ecosystem that turns an iPad into a highly customizable, high-performance input device that replaces traditional, often inaccessible, keyboard shortcuts.

### Key Contributions

- **Context-Aware Engine:** Developed a desktop listener in **Python** that monitors the focused PC application and signals the iPad app to automatically swap its action grid. This allows users to have unique layouts for different apps (e.g., Photoshop vs. Chrome) that switch instantly.
- **Low-Latency Connectivity:** Utilized **Bluetooth LE (BLE)** and **HTTP over WiFi** to ensure that the virtual trackpad, keyboard, and macro inputs felt responsive and instantaneous.
- **Cross-Platform Stack:** Built the mobile interface using **React Native and TypeScript**, interfacing with a custom Python-based server and backend on the desktop.

### Impact

- **Enhanced Accessibility:** Created a solution for users who cannot use a standard keyboard, allowing them to execute complex multi-key commands and macros with a single tap.
- **Productivity Boost:** While designed for accessibility, the context-aware switching significantly improves productivity for any power user by automating peripheral layout changes.
- **Hardware-Software Synergy:** Successfully bridged the gap between mobile touch interfaces and desktop OS environments with minimal input lag.
