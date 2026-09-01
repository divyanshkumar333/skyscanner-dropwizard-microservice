# Flightscry - Flight Itinerary Proof-of-Concept Android App

Flightscry is a proof-of-concept Android flight itinerary mobile application developed with **Kotlin** and styled using Skyscanner's **Backpack UI design system library** (`net.skyscanner.backpack:backpack-android`).

---

## 📱 Features

- **Skyscanner Backpack Integration**: Styled using Skyscanner's official design system components.
- **Flight Information Card**: Displays the flight header and flight code (`SK1234`) inside a `BpkCardView` with `large` corner styling and `bpkTextHeading1` typography.
- **Departure Card**: Highlights departure airport code (`LHR`), departure time (`14:30`), and city details.
- **Arrival Card**: Displays arrival airport code (`CDG`), arrival time (`16:45`), and destination details.
- **Clean Architecture & Constraint Layout**: Responsive, well-padded layout with distinct visual hierarchy.

---

## 🛠️ Tech Stack & Specifications

- **Language**: Kotlin
- **Minimum SDK**: API 33 (Android 13 / Tiramisu)
- **Target SDK**: API 34 (Android 14)
- **UI Library**: `net.skyscanner.backpack:backpack-android:43.0.0`
- **Theme**: `BpkTheme`

---

## 📂 Project Structure

```
task_3/flightscry-app/
├── app/
│   ├── build.gradle                              # Module build config & Backpack dependency
│   ├── proguard-rules.pro                        # Proguard keep rules
│   └── src/
│       └── main/
│           ├── AndroidManifest.xml               # App manifest with BpkTheme
│           ├── java/com/skyscanner/flightscry/
│           │   └── MainActivity.kt               # Entry point activity
│           └── res/
│               ├── layout/
│               │   └── activity_main.xml         # Backpack cards & text layout
│               └── values/
│                   ├── colors.xml                # Skyscanner color palette
│                   ├── strings.xml               # UI string tokens
│                   └── themes.xml                # Theme extending BpkTheme
├── build.gradle                                  # Root build configuration
├── settings.gradle                               # Repositories & project include
├── gradle.properties                             # Gradle build JVM args & AndroidX
└── README.md                                     # Documentation
```

---

## 🚀 Getting Started

### 1. Open in Android Studio
1. Open **Android Studio** (Electric Eel or newer).
2. Select **File > Open** and navigate to `task_3/flightscry-app`.
3. Wait for Gradle sync to complete.

### 2. Run on Emulator or Physical Device
1. Select an Android Virtual Device (AVD) running **API 33 or higher**.
2. Click the green **Run (▶)** button in Android Studio.
3. The app will launch showing the Skyscanner flight itinerary cards.

---

## 🧩 Backpack Components Used

- **`net.skyscanner.backpack.cardview.BpkCardView`**: Used for elevated information cards with `app:cornerStyle="large"`.
- **`net.skyscanner.backpack.text.BpkText`**: Used with Backpack typography styles:
  - `@style/bpkTextHeading1`
  - `@style/bpkTextHeading2`
  - `@style/bpkTextHero`
  - `@style/bpkTextBodyDefault`
