export type TarotCard = {
  id: number;
  name: string;
  symbol: string;
  tagline: string;
  description: string;
  ritual: {
    morningAnchor: string;
    workApproach: string;
    creativePrompt: string;
    movement: string;
  };
};

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    symbol: "🌬️",
    tagline: "begin before you're ready.",
    description:
      "The Fool steps off the cliff not from ignorance, but from trust. Today carries the energy of the fresh start — unformed, unlimited, alive.",
    ritual: {
      morningAnchor:
        "Don't check your phone first. Go outside for 5 minutes before anything else. Let the day be unwritten.",
      workApproach:
        "Pick one thing you've been overthinking and just start it. Messy first drafts are sacred today.",
      creativePrompt: "What would I do if I wasn't afraid of looking stupid?",
      movement:
        "Walk somewhere new — even just a different block. Let your body lead.",
    },
  },
  {
    id: 1,
    name: "The Magician",
    symbol: "✦",
    tagline: "you have everything you need.",
    description:
      "The Magician doesn't wait for permission. All four elements are on the table — will, feeling, thought, and body. Use them.",
    ritual: {
      morningAnchor:
        "Write down 3 tools or skills you already have. Not what you're missing — what's already in your hands.",
      workApproach:
        "Focus mode today. One tab, one task, one hour at a time. You are capable of more than you think.",
      creativePrompt: "What have I been waiting for permission to make?",
      movement:
        "Something that makes you feel capable — a strong walk, a workout, anything with intention.",
    },
  },
  {
    id: 2,
    name: "The High Priestess",
    symbol: "☽",
    tagline: "be still. you already know.",
    description:
      "The High Priestess holds what cannot be said. She sits between the pillars and waits. Today is for listening, not pushing.",
    ritual: {
      morningAnchor:
        "5 minutes of silence before the day begins. No music, no podcast. Just sit.",
      workApproach:
        "Trust your gut on any decisions today. If something feels off, it probably is.",
      creativePrompt: "What do I know but keep talking myself out of?",
      movement: "Yin yoga or slow stretching. Nothing competitive.",
    },
  },
  {
    id: 3,
    name: "The Empress",
    symbol: "♀",
    tagline: "nourish something today.",
    description:
      "The Empress is abundance, body, earth. She doesn't hustle — she tends. Growth here is slow, sensory, and real.",
    ritual: {
      morningAnchor: "Eat a real breakfast. Sit down for it. No screens.",
      workApproach:
        "Work on something generative today — building, creating, nurturing a project forward.",
      creativePrompt: "What in my life needs more tending?",
      movement: "Get outside. Bare feet on grass if you can manage it.",
    },
  },
  {
    id: 4,
    name: "The Emperor",
    symbol: "♈",
    tagline: "build the structure. hold the line.",
    description:
      "The Emperor isn't about control — he's about foundation. Systems, discipline, and clarity of purpose.",
    ritual: {
      morningAnchor:
        "Write your top 3 priorities before you open anything. Stick to them.",
      workApproach:
        "No multitasking. Structured blocks, clear goals. Be your own boss today.",
      creativePrompt: "What structure would actually free me?",
      movement:
        "Strength training or something grounding — deadlifts, planks, resistance work.",
    },
  },
  {
    id: 5,
    name: "The Hierophant",
    symbol: "☩",
    tagline: "find the teaching in the tradition.",
    description:
      "The Hierophant bridges the sacred and the institutional. Today ask what's worth keeping — and what rules you've outgrown.",
    ritual: {
      morningAnchor:
        "Return to something you learned long ago — a technique, a practice, a mentor's words.",
      workApproach:
        "Follow the process today. Don't skip steps. There's wisdom in the method.",
      creativePrompt:
        "What belief am I still carrying that no longer belongs to me?",
      movement:
        "Something with form and discipline — tai chi, a structured class, technique drills.",
    },
  },
  {
    id: 6,
    name: "The Lovers",
    symbol: "⚭",
    tagline: "choose with your whole self.",
    description:
      "The Lovers isn't just romance — it's alignment. A choice made from the deepest part of who you are.",
    ritual: {
      morningAnchor:
        "Name one thing you're choosing today — not by default, but on purpose.",
      workApproach:
        "Any crossroads today, check in with your values before deciding. Does this align?",
      creativePrompt:
        "What do I actually want — underneath what I think I should want?",
      movement:
        "Partner yoga, a dance class, or anything that feels like play.",
    },
  },
  {
    id: 7,
    name: "The Chariot",
    symbol: "⚔",
    tagline: "hold the reins. move forward.",
    description:
      "The Chariot wins not through force but through focused will. Two opposing forces — held, directed, harnessed.",
    ritual: {
      morningAnchor:
        "Set a clear intention for the day. Write it down. One sentence.",
      workApproach:
        "Push through resistance today. You have the momentum — don't stop to second-guess.",
      creativePrompt:
        "What opposing forces am I trying to hold together right now?",
      movement:
        "Cardio with drive — running, cycling, something that builds forward energy.",
    },
  },
  {
    id: 8,
    name: "Strength",
    symbol: "∞",
    tagline: "soft hands. steady heart.",
    description:
      "Strength is the quiet taming — not by overpowering but by presence. Courage here is gentle, consistent, and deeply patient.",
    ritual: {
      morningAnchor:
        "Think of something that's been scaring you. Sit with it for 2 minutes without trying to fix it.",
      workApproach:
        "Meet any friction today with patience, not force. Steady over fast.",
      creativePrompt:
        "Where in my life am I being braver than I give myself credit for?",
      movement:
        "Something slow and strong — long holds, deliberate movement, deep stretching.",
    },
  },
  {
    id: 9,
    name: "The Hermit",
    symbol: "⌾",
    tagline: "go inward. the light is yours.",
    description:
      "The Hermit climbs alone — not from isolation but from purpose. He carries his own light. Today is for solitude and inner work.",
    ritual: {
      morningAnchor:
        "Journal for 10 minutes without a prompt. Let whatever comes, come.",
      workApproach:
        "Work alone today if you can. Deep focus, no collaboration. Go inside the problem.",
      creativePrompt: "What truth have I been avoiding by staying busy?",
      movement: "A solo walk. No music. Just you and the road.",
    },
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    symbol: "☸",
    tagline: "the wheel turns. trust the spin.",
    description:
      "The Wheel is always moving. What looks like luck is pattern — rise, fall, rise again. Today, release the illusion of control.",
    ritual: {
      morningAnchor:
        "Name one thing in your life that's changing whether you want it to or not. Breathe into it.",
      workApproach:
        "Stay flexible. Plans may shift — go with it rather than against it.",
      creativePrompt: "What cycle in my life is completing right now?",
      movement:
        "Something circular and rhythmic — swimming laps, cycling, a walking loop.",
    },
  },
  {
    id: 11,
    name: "Justice",
    symbol: "⚖",
    tagline: "see clearly. act honestly.",
    description:
      "Justice doesn't punish — she balances. Clear eyes, honest accounting, cause and effect. Today is for truth-telling.",
    ritual: {
      morningAnchor:
        "Name one thing you've been avoiding looking at honestly. Just name it — no action required yet.",
      workApproach:
        "Do the thing you've been putting off because it's uncomfortable. Face it clean.",
      creativePrompt:
        "What would I do differently if I was being fully honest with myself?",
      movement:
        "Bilateral movement — swimming, walking, anything that works both sides equally.",
    },
  },
  {
    id: 12,
    name: "The Hanged Man",
    symbol: "⊥",
    tagline: "surrender the angle. see new.",
    description:
      "The Hanged Man chose to stop. The pause is the point. Surrender here isn't defeat — it's the radical act of letting go.",
    ritual: {
      morningAnchor:
        "Don't jump into tasks. Spend 10 minutes doing absolutely nothing productive — stare out a window.",
      workApproach:
        "If you're stuck, stop pushing. Put it down and come back. The answer comes in the pause.",
      creativePrompt:
        "What would I see if I looked at this situation from the complete opposite angle?",
      movement:
        "Inversions if you practice yoga. Otherwise, lie on the floor and breathe.",
    },
  },
  {
    id: 13,
    name: "Death",
    symbol: "🜏",
    tagline: "let it end. something is waiting.",
    description:
      "Death in tarot is transformation — the necessary ending that makes room for what's next. What are you holding past its time?",
    ritual: {
      morningAnchor:
        "Identify one thing — a habit, a thought pattern, a dynamic — that you're ready to release.",
      workApproach:
        "Close a loop today. Finish something, archive something, let something go.",
      creativePrompt: "What am I ready to stop being?",
      movement:
        "Something that feels like a release — shaking, ecstatic dance, a hard run.",
    },
  },
  {
    id: 14,
    name: "Temperance",
    symbol: "🜄",
    tagline: "flow between. find the middle.",
    description:
      "Temperance pours between vessels without spilling. The angel has one foot on land, one in water — balance through movement, not stillness.",
    ritual: {
      morningAnchor:
        "Check in with your body — water, food, rest. What does it actually need today?",
      workApproach:
        "Moderate the pace. Not too fast, not stalled. Steady output, regular breaks.",
      creativePrompt:
        "Where in my life am I out of balance, and what would bring it back to center?",
      movement:
        "Swimming or water if accessible. Otherwise flow yoga or slow tai chi.",
    },
  },
  {
    id: 15,
    name: "The Devil",
    symbol: "♄",
    tagline: "name the chain. that's the first key.",
    description:
      "The Devil shows the chains we've agreed to — often loosely, often unconsciously. The figures can leave. They stay by habit.",
    ritual: {
      morningAnchor:
        "Notice what you reach for automatically this morning — phone, food, distraction. Just notice.",
      workApproach:
        "Identify one pattern that keeps showing up in your work life. Name it without shame.",
      creativePrompt: "What am I pretending I have no choice about?",
      movement:
        "Something that shakes the body loose — interval training, dance, anything that disrupts the pattern.",
    },
  },
  {
    id: 16,
    name: "The Tower",
    symbol: "🜂",
    tagline: "what falls was never the foundation.",
    description:
      "The Tower is sudden, necessary upheaval. Lightning clears what was built on false ground. The fall is not the end.",
    ritual: {
      morningAnchor:
        "Acknowledge something that is currently destabilized in your life. Say it out loud.",
      workApproach:
        "Don't try to control what's already in motion. Triage — what actually needs your attention right now?",
      creativePrompt:
        "What false structure in my life is currently falling — and what might be freed by it?",
      movement:
        "High intensity — something that burns through the tension. Sprint, box, HIIT.",
    },
  },
  {
    id: 17,
    name: "The Star",
    symbol: "★",
    tagline: "you are being renewed.",
    description:
      "After the Tower, The Star. She pours water endlessly, naked and unashamed. Hope here is quiet, steady, and healing.",
    ritual: {
      morningAnchor:
        "Write down one thing you're genuinely hopeful about — however small.",
      workApproach:
        "Work on something that genuinely matters to you today. Not just the urgent — the meaningful.",
      creativePrompt:
        "What do I want my life to look and feel like — truly, underneath the fear?",
      movement:
        "Gentle and restorative — long walks, yin yoga, anything that feels healing.",
    },
  },
  {
    id: 18,
    name: "The Moon",
    symbol: "🌕",
    tagline: "slow down. trust the dark.",
    description:
      "The Moon illuminates what we'd rather not see. Dreams, fears, and the unconscious rise to the surface. Don't force clarity — let the path reveal itself.",
    ritual: {
      morningAnchor:
        "Before your screen, sit in the quiet. Try 5 minutes of Holding the Tree — feel your feet on the floor. The Moon asks you to root before you reach.",
      workApproach:
        "Don't force clarity today. Work in shorter bursts — 45 minutes, then step away. Intuition is doing background processing. Let it.",
      creativePrompt: "What am I afraid to write down?",
      movement:
        "Slow and fluid today. Qigong or gentle stretching — Swimming Dragon or Pulling Down the Heavens.",
    },
  },
  {
    id: 19,
    name: "The Sun",
    symbol: "☀",
    tagline: "come out. it's your turn to shine.",
    description:
      "The Sun is unambiguous joy — the child on the horse, arms wide open. Visibility, vitality, and the pleasure of being fully alive.",
    ritual: {
      morningAnchor:
        "Go outside before you start work. Let actual sunlight hit your face.",
      workApproach:
        "Lead with enthusiasm today. Let people see what you're excited about.",
      creativePrompt:
        "What brings me uncomplicated joy — and when did I last make time for it?",
      movement:
        "Outside if at all possible. Run, bike, play — anything in the sun.",
    },
  },
  {
    id: 20,
    name: "Judgement",
    symbol: "🔔",
    tagline: "hear the call. rise.",
    description:
      "Judgement is the awakening — the moment you can no longer pretend you didn't hear. It's a calling, not a verdict.",
    ritual: {
      morningAnchor:
        "Sit quietly and ask: what is calling me right now that I keep ignoring?",
      workApproach:
        "Do something today that aligns with who you're becoming — not just who you've been.",
      creativePrompt:
        "What chapter of my life is asking to be closed so the next one can open?",
      movement:
        "Something expressive — singing while you walk, ecstatic dance, anything with release.",
    },
  },
  {
    id: 21,
    name: "The World",
    symbol: "🜃",
    tagline: "you have arrived. begin again.",
    description:
      "The World dancer moves in completion — the wreath is a zero, an ending that is also a beginning. Celebrate what you've finished.",
    ritual: {
      morningAnchor:
        "Name something you have genuinely completed or accomplished — recently or ever. Sit with that.",
      workApproach:
        "Bring something to a real close today. Ship it, submit it, mark it done.",
      creativePrompt:
        "What would it feel like to be truly finished with something I've been carrying?",
      movement:
        "Celebratory movement — dance, a victory lap, something that feels like joy in the body.",
    },
  },
];
