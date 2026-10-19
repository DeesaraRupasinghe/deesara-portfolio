# Deesara Rupasinghe — Personal Portfolio Website
> **“DEESARA — ENGINEERING THE NEXT”**
> Production-ready, award-winning personal portfolio website engineered for Deesara Rupasinghe (Software Engineer · Agentic AI · Generative AI · Full-Stack Development).

---

## 🚀 Live Vercel Deployment Guide

This project is built using **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, configured to deploy seamlessly to **Vercel** with zero extra setup.

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete personal portfolio website"
   git remote add origin https://github.com/DeesaraRupasinghe/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio will be live on your custom `.vercel.app` domain in seconds!

### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🛠️ Local Development & Build Commands

- **Start Development Server**:
  ```bash
  npm run dev
  ```
  Accessible at `http://localhost:3000/`.

- **Production Build Validation**:
  ```bash
  npm run build
  ```
  Compiles TypeScript and outputs the production bundle to `dist/`.

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## 🎨 Visual Identity & Architecture

- **Theme**: High-end near-black palette (`#08090D`, `#10121A`, `#171A24`) with electric lime (`#C6FF5E`) branding accent and subtle cyan/violet glows.
- **Typography**: Editorial modern typography via *Plus Jakarta Sans*, *Inter*, and *JetBrains Mono*.
- **Interactive Particle Matrix**: Subtle HTML5 canvas particle network responding to mouse movement without lag; disabled automatically when `prefers-reduced-motion` is active.
- **Genuine Media Assets**:
  - `public/images/deesara-portrait.png`: Verified academic graduation portrait.
  - `public/images/pawura-smart-buoy.jpg` & `pawura-buoy-iot.jpg`: Physical IoT marine buoy prototype.
  - `public/images/hiv-iot-device-1.jpg` & `hiv-iot-device-2.jpg`: Wearable IoT patient hardware.
  - `public/images/construction-safety-device.jpg`: Soil collapse hazard hardware.
  - `public/images/nbqsa-award-portrait.jpg` & `nbqsa-team-merit.jpg`: NBQSA 2026 National ICT Merit Award ceremonies.
  - `public/images/gsea-award.jpg` & `gsea-stage.jpg`: GSEA 2022/23 1st Runner-Up podium (Huwasi Ceylon).
  - `public/images/microsoft-workshop.jpg`: Microsoft Copilot Studio & Agentic AI workshop.
  - `public/Deesara_Rupasinghe_CV.pdf`: Official downloadable curriculum vitae.

---

## 📑 Verified Content Summary

1. **Dual Honours Degrees Concurrently Completed (2022–2026)**:
   - **University of Colombo** (Faculty of Technology): *Bachelor (Honours) in Information and Communication Technology*
   - **SLIIT** (Faculty of Computing): *Bachelor of Science (Honours) in Information Technology — Data Science*
2. **Flagship Projects**:
   - **Pawura**: Coastal erosion forecasting via Sentinel-2/Landsat + LSTM + ESP32 LoRa smart buoy (*Grade A+*, *NBQSA 2026 Merit Award*, *WSA National Nominee*).
   - **HIV Decision Support System**: Clinical data warehousing + XGBoost predictive risk engine + wearable ESP32 IoT sensors (*Grade A*).
   - **Before Buy**: Vehicle emission report analysis platform via document OCR and vision LLMs.
   - **Construction Safety System**: Soil collapse hazard detection hardware with real-time cloud alerting.
   - **C Programming Sinhala**: Published Android application on Google Play.
3. **Conference Publications**:
   - *ICMSS 2026* (Pawura Platform)
   - *eSmarTA 2026* (HIV Decision Support System)
4. **Professional Experience**:
   - **IFINITY Global** (Intern Data Engineer, March 2025 – Sept 2025): Bank of Ceylon Trade Finance MT/MX, Oracle Database, ELK Stack, WSO2, customer clustering.
   - **Techwire Lanka** (Intern Software Engineer, March 2021 – June 2021): C#, .NET Framework, SQL.
