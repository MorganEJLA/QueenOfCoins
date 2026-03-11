export type MovementEnergy = "slow" | "fluid" | "grounded" | "intense" | "expressive";

export type MovementPreference =
  | "Walking"
  | "Running"
  | "Aerobics"
  | "Dance"
  | "Pilates"
  | "Yoga"
  | "Swimming"
  | "Weights"
  | "Bodyweight"
  | "Tai Chi";

// 10 preferences × 5 energies = 50 suggestions
export const movementSuggestions: Record<MovementPreference, Record<MovementEnergy, string>> = {
  Walking: {
    slow: "A slow, intentional walk today — no destination, no pace goal. Let your body lead and your mind follow.",
    fluid: "Walk without a route. Let one turn suggest the next. The path reveals itself when you stop planning it.",
    grounded: "A steady walk, feet deliberate on the ground. Feel the weight of each step. You are here.",
    intense: "Push the pace today — a brisk walk that gets the blood moving. Channel the energy outward.",
    expressive: "Walk somewhere new. Let curiosity be the compass. This is exploration, not exercise.",
  },
  Running: {
    slow: "An easy jog today — conversational pace, no watch. Let the run be a moving meditation.",
    fluid: "Run without a fixed distance. Start slow, find your rhythm, and let the body decide when it's done.",
    grounded: "A steady, measured run. Focus on form — foot strike, posture, breath. Root down even as you move.",
    intense: "Run hard today. Intervals, hills, or a tempo push — let the body burn through what it's been carrying.",
    expressive: "Take a route you've never run before. The unfamiliar is the point.",
  },
  Aerobics: {
    slow: "Low-impact movement today — gentle cardio, nothing that spikes the heart rate. Keep it soft.",
    fluid: "A flowing aerobics sequence, continuous movement without sharp stops. Let one motion carry into the next.",
    grounded: "Steady-state cardio with focus — feel your feet, your breath, your rhythm. Present and grounded.",
    intense: "High-intensity today. Go hard, recover, go again. Let the body release what the mind has been holding.",
    expressive: "Put on music you love and just move. Forget the routine — let the song lead.",
  },
  Dance: {
    slow: "Slow, deliberate movement today — sway rather than step. Let the music hold you rather than drive you.",
    fluid: "Free movement, no choreography. Let one motion dissolve into the next. The body knows.",
    grounded: "Rooted, rhythmic movement — feel the floor under you with every beat. Dance from the ground up.",
    intense: "Dance it out fully today. High energy, full commitment, nothing held back.",
    expressive: "This is your element today. Put on something that moves you and give it everything.",
  },
  Pilates: {
    slow: "A slow, restorative pilates practice today — floor work, breath, long holds. Nothing performative.",
    fluid: "Flow through your pilates sequence without pausing between exercises. Let it become one continuous movement.",
    grounded: "Core-focused and deliberate today. Every movement from center. Stability before mobility.",
    intense: "Push into the harder variations today — advanced work, full range, no shortcuts.",
    expressive: "Let your pilates practice feel like play today. Explore the edges of each movement with curiosity.",
  },
  Yoga: {
    slow: "Yin or restorative today — long holds, props if you need them, full surrender into each shape.",
    fluid: "A flowing vinyasa, breath linked to movement. Let the sequence carry you rather than the other way around.",
    grounded: "Standing poses and root work today — Warrior, Mountain, Tree. Feel what it means to be held by the earth.",
    intense: "A strong practice today — power yoga, challenging transitions, full engagement. Meet your edge.",
    expressive: "Move intuitively on the mat today. No sequence, no goal. Just you and the breath.",
  },
  Swimming: {
    slow: "Slow laps today, no counting. Float when you need to. Let the water hold the weight for a while.",
    fluid: "Continuous movement in the water — let the strokes flow into each other without pause or urgency.",
    grounded: "Focused technique today. Catch, pull, kick. Deliberate and present in every length.",
    intense: "Intervals in the pool — push hard, recover, push again. The water takes the impact so you don't have to.",
    expressive: "Swim without a lane if you can. Move through the water however feels good. No laps, just swimming.",
  },
  Weights: {
    slow: "Light weights, slow tempo today — 4 counts down, 4 counts up. Control over load. Feel every rep.",
    fluid: "A flowing lifting sequence today — one exercise into the next with minimal rest. Movement as meditation.",
    grounded: "Compound lifts today — deadlift, squat, press. Big movements, heavy enough to demand presence.",
    intense: "Go heavy today. Max effort sets, full recovery between. Let the weight demand everything you have.",
    expressive: "Play with your training today — try a movement you haven't done before, explore range, be curious.",
  },
  Bodyweight: {
    slow: "Slow bodyweight work today — deep squats held long, push-ups at half tempo. Strength through stillness.",
    fluid: "Animal flow or a continuous bodyweight circuit — movement that never fully stops. Let one shape become the next.",
    grounded: "Foundational movements today — plank, bridge, squat. Build from the floor up. No equipment needed, just presence.",
    intense: "Full bodyweight HIIT today — burpees, jumps, sprints. Use what you have, give everything you've got.",
    expressive: "Handstands, cartwheels, crawling — move like you did before movement had rules. Playful and free.",
  },
  "Tai Chi": {
    slow: "A slow, meditative form today — full presence in every transition. Let the practice be the stillness.",
    fluid: "Move through your form as one unbroken sequence. No pauses, no corrections. Pure continuity.",
    grounded: "Root work today — sink into your stances, feel the earth beneath you. Every movement from center.",
    intense: "Push hands or a more martial application today — let tai chi show its strength rather than its softness.",
    expressive: "Move through the form outside if you can. Let the environment become part of the practice.",
  },
};
