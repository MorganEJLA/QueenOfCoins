import {
  MovementEnergy,
  MovementPreference,
  movementSuggestions,
} from "./movementData";

export type TarotCard = {
  id: number;
  name: string;
  suit: "major" | "wands" | "cups" | "swords" | "pentacles";
  tagline: string;
  description: string;
  ritual: {
    morningAnchor: string;
    workApproach: string;
    creativePrompt: string;
    movementEnergy: MovementEnergy;
  };
};

export function getMovementSuggestion(
  energy: MovementEnergy,
  preference: MovementPreference | null,
): string {
  if (!preference) {
    return defaultMovement[energy];
  }
  return movementSuggestions[preference][energy];
}

// Fallback suggestions when no preference is set
const defaultMovement: Record<MovementEnergy, string> = {
  slow: "Slow and restorative today — gentle stretching, long holds, or simply stillness. Let the body rest.",
  fluid:
    "Flowing, continuous movement today — something rhythmic and unforced. Let one motion carry into the next.",
  grounded:
    "Grounded, deliberate movement today — something that connects you to your body and the earth beneath you.",
  intense:
    "High energy today — something that burns through the tension and gets the blood moving. Full release.",
  expressive:
    "Move however feels good today — playful, free, and without agenda. Let the body lead.",
  restorative:
    "Qi gong or gentle stretching today — slow, breath-led movement only. Try Holding the Tree for 5 minutes, or simply lie down and do nothing. Healing is not laziness.",
};

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    suit: "major",
    tagline: "begin before you're ready.",
    description:
      "The Fool steps off the cliff not from ignorance, but from trust. Today carries the energy of the fresh start — unformed, unlimited, alive.",
    ritual: {
      morningAnchor:
        "Don't check your phone first. Go outside for 5 minutes before anything else. Let the day be unwritten.",
      workApproach:
        "Pick one thing you've been overthinking and just start it. Messy first drafts are sacred today.",
      creativePrompt: "What would I do if I wasn't afraid of looking stupid?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 1,
    name: "The Magician",
    suit: "major",
    tagline: "you have everything you need.",
    description:
      "The Magician doesn't wait for permission. All four elements are on the table — will, feeling, thought, and body. Use them.",
    ritual: {
      morningAnchor:
        "Write down 3 tools or skills you already have. Not what you're missing — what's already in your hands.",
      workApproach:
        "Focus mode today. One tab, one task, one hour at a time. You are capable of more than you think.",
      creativePrompt: "What have I been waiting for permission to make?",
      movementEnergy: "intense",
    },
  },
  {
    id: 2,
    name: "The High Priestess",
    suit: "major",
    tagline: "be still. you already know.",
    description:
      "The High Priestess holds what cannot be said. She sits between the pillars and waits. Today is for listening, not pushing.",
    ritual: {
      morningAnchor:
        "5 minutes of silence before the day begins. No music, no podcast. Just sit.",
      workApproach:
        "Trust your gut on any decisions today. If something feels off, it probably is.",
      creativePrompt: "What do I know but keep talking myself out of?",
      movementEnergy: "slow",
    },
  },
  {
    id: 3,
    name: "The Empress",
    suit: "major",
    tagline: "nourish something today.",
    description:
      "The Empress is abundance, body, earth. She doesn't hustle — she tends. Growth here is slow, sensory, and real.",
    ritual: {
      morningAnchor: "Eat a real breakfast. Sit down for it. No screens.",
      workApproach:
        "Work on something generative today — building, creating, nurturing a project forward.",
      creativePrompt: "What in my life needs more tending?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 4,
    name: "The Emperor",
    suit: "major",
    tagline: "build the structure. hold the line.",
    description:
      "The Emperor isn't about control — he's about foundation. Systems, discipline, and clarity of purpose.",
    ritual: {
      morningAnchor:
        "Write your top 3 priorities before you open anything. Stick to them.",
      workApproach:
        "No multitasking. Structured blocks, clear goals. Be your own boss today.",
      creativePrompt: "What structure would actually free me?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 5,
    name: "The Hierophant",
    suit: "major",
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
      movementEnergy: "slow",
    },
  },
  {
    id: 6,
    name: "The Lovers",
    suit: "major",
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
      movementEnergy: "fluid",
    },
  },
  {
    id: 7,
    name: "The Chariot",
    suit: "major",
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
      movementEnergy: "intense",
    },
  },
  {
    id: 8,
    name: "Strength",
    suit: "major",
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
      movementEnergy: "slow",
    },
  },
  {
    id: 9,
    name: "The Hermit",
    suit: "major",
    tagline: "go inward. the light is yours.",
    description:
      "The Hermit climbs alone — not from isolation but from purpose. He carries his own light. Today is for solitude and inner work.",
    ritual: {
      morningAnchor:
        "Journal for 10 minutes without a prompt. Let whatever comes, come.",
      workApproach:
        "Work alone today if you can. Deep focus, no collaboration. Go inside the problem.",
      creativePrompt: "What truth have I been avoiding by staying busy?",
      movementEnergy: "slow",
    },
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    suit: "major",
    tagline: "the wheel turns. trust the spin.",
    description:
      "The Wheel is always moving. What looks like luck is pattern — rise, fall, rise again. Today, release the illusion of control.",
    ritual: {
      morningAnchor:
        "Name one thing in your life that's changing whether you want it to or not. Breathe into it.",
      workApproach:
        "Stay flexible. Plans may shift — go with it rather than against it.",
      creativePrompt: "What cycle in my life is completing right now?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 11,
    name: "Justice",
    suit: "major",
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
      movementEnergy: "grounded",
    },
  },
  {
    id: 12,
    name: "The Hanged Man",
    suit: "major",
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
      movementEnergy: "slow",
    },
  },
  {
    id: 13,
    name: "Death",
    suit: "major",
    tagline: "let it end. something is waiting.",
    description:
      "Death in tarot is transformation — the necessary ending that makes room for what's next. What are you holding past its time?",
    ritual: {
      morningAnchor:
        "Identify one thing — a habit, a thought pattern, a dynamic — that you're ready to release.",
      workApproach:
        "Close a loop today. Finish something, archive something, let something go.",
      creativePrompt: "What am I ready to stop being?",
      movementEnergy: "intense",
    },
  },
  {
    id: 14,
    name: "Temperance",
    suit: "major",
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
      movementEnergy: "fluid",
    },
  },
  {
    id: 15,
    name: "The Devil",
    suit: "major",
    tagline: "name the chain. that's the first key.",
    description:
      "The Devil shows the chains we've agreed to — often loosely, often unconsciously. The figures can leave. They stay by habit.",
    ritual: {
      morningAnchor:
        "Notice what you reach for automatically this morning — phone, food, distraction. Just notice.",
      workApproach:
        "Identify one pattern that keeps showing up in your work life. Name it without shame.",
      creativePrompt: "What am I pretending I have no choice about?",
      movementEnergy: "intense",
    },
  },
  {
    id: 16,
    name: "The Tower",
    suit: "major",
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
      movementEnergy: "intense",
    },
  },
  {
    id: 17,
    name: "The Star",
    suit: "major",
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
      movementEnergy: "slow",
    },
  },
  {
    id: 18,
    name: "The Moon",
    suit: "major",
    tagline: "slow down. trust the dark.",
    description:
      "The Moon illuminates what we'd rather not see. Dreams, fears, and the unconscious rise to the surface. Don't force clarity — let the path reveal itself.",
    ritual: {
      morningAnchor:
        "Before your screen, sit in the quiet. Try 5 minutes of Holding the Tree — feel your feet on the floor. The Moon asks you to root before you reach.",
      workApproach:
        "Don't force clarity today. Work in shorter bursts — 45 minutes, then step away. Intuition is doing background processing. Let it.",
      creativePrompt: "What am I afraid to write down?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 19,
    name: "The Sun",
    suit: "major",
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
      movementEnergy: "expressive",
    },
  },
  {
    id: 20,
    name: "Judgement",
    suit: "major",
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
      movementEnergy: "expressive",
    },
  },
  {
    id: 21,
    name: "The World",
    suit: "major",
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
      movementEnergy: "expressive",
    },
  },
];
export const wandsSuit: TarotCard[] = [
  {
    id: 22,
    name: "Ace of Wands",
    suit: "wands",
    tagline: "the spark is here. catch it.",
    description:
      "The Ace of Wands is pure creative potential — the moment before the idea becomes a plan. Something is igniting. Don't overthink it. Move.",
    ritual: {
      morningAnchor:
        "Write down one thing you're excited about right now. Not what you should be excited about — what actually has a pulse.",
      workApproach:
        "Start the thing you've been circling. Even five minutes. The Ace rewards action over preparation.",
      creativePrompt: "What would I make if I knew it would work?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 23,
    name: "Two of Wands",
    suit: "wands",
    tagline: "you've outgrown this shore.",
    description:
      "The Two of Wands stands at the edge of the known world, globe in hand. The plan is forming. The vision is bigger than the current container.",
    ritual: {
      morningAnchor:
        "Look at your longer horizon today — not today's task list, but where you're actually trying to go.",
      workApproach:
        "Spend time on strategy, not just execution. What's the bigger move you've been putting off planning?",
      creativePrompt:
        "What would I pursue if I wasn't limited to what seems realistic right now?",
      movementEnergy: "intense",
    },
  },
  {
    id: 24,
    name: "Three of Wands",
    suit: "wands",
    tagline: "you launched. now watch it land.",
    description:
      "The Three of Wands watches ships on the horizon — things already set in motion. This is the patient wait after the brave send.",
    ritual: {
      morningAnchor:
        "Name one thing you've already put out into the world that you're waiting to hear back on. Acknowledge the courage it took to send it.",
      workApproach:
        "Follow up on something you've already started rather than launching something new. Tend what's in motion.",
      creativePrompt: "What have I set in motion that I need to trust more?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 25,
    name: "Four of Wands",
    suit: "wands",
    tagline: "celebrate the ground you've built.",
    description:
      "The Four of Wands is the garland strung between the pillars — a moment of real celebration before the next push. Don't skip this.",
    ritual: {
      morningAnchor:
        "Name something you've accomplished recently that you didn't properly celebrate. Sit with it for a moment today.",
      workApproach:
        "Make space for joy in the work today. Collaboration, connection, something that feels good rather than just productive.",
      creativePrompt: "What milestone have I been moving past too quickly?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 26,
    name: "Five of Wands",
    suit: "wands",
    tagline: "the chaos is the practice.",
    description:
      "The Five of Wands is the scramble — competing forces, conflicting priorities, everyone swinging. It's not malicious. It's just loud.",
    ritual: {
      morningAnchor:
        "Name the loudest competing demand on your attention right now. Just naming it takes away some of its power.",
      workApproach:
        "Don't try to resolve every conflict today. Focus on what's actually yours to handle and let the rest be noise.",
      creativePrompt:
        "Where am I creating unnecessary competition or chaos in my own life?",
      movementEnergy: "intense",
    },
  },
  {
    id: 27,
    name: "Six of Wands",
    suit: "wands",
    tagline: "you won. let yourself be seen.",
    description:
      "The Six of Wands rides through the crowd — victory, recognition, the laurel wreath earned. This is not arrogance. This is allowing yourself to be witnessed.",
    ritual: {
      morningAnchor:
        "Own something you did well this week. Say it out loud, not in your head.",
      workApproach:
        "Put your work in front of someone today. Share it, send it, show it. Visibility is part of the work.",
      creativePrompt:
        "What am I afraid will happen if I let myself be publicly proud of something?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 28,
    name: "Seven of Wands",
    suit: "wands",
    tagline: "hold your ground.",
    description:
      "The Seven of Wands stands on the high ground, outnumbered but positioned. This is about defending what you've built — not from aggression, but from clarity.",
    ritual: {
      morningAnchor:
        "Identify one boundary or position you need to hold today. Name it clearly before the day starts.",
      workApproach:
        "Don't abandon your perspective just because it's being challenged. Pressure-test it, yes — but know the difference between refining and capitulating.",
      creativePrompt:
        "What do I actually believe that I've been softening to make others comfortable?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 29,
    name: "Eight of Wands",
    suit: "wands",
    tagline: "everything is moving. move with it.",
    description:
      "The Eight of Wands is all velocity — eight staffs cutting through clear sky, nothing in the way. Communication, momentum, things arriving fast.",
    ritual: {
      morningAnchor:
        "Clear your inbox or messages before starting anything else. Remove the backlog so the new can land.",
      workApproach:
        "Move fast today. Send the thing, make the call, make the decision. The energy supports speed.",
      creativePrompt:
        "What would I do today if I trusted that the timing was finally right?",
      movementEnergy: "intense",
    },
  },
  {
    id: 30,
    name: "Nine of Wands",
    suit: "wands",
    tagline: "you're still standing. that's enough.",
    description:
      "The Nine of Wands is battle-worn but upright — one more fence to hold, one more push required. The exhaustion is real. So is the resilience.",
    ritual: {
      morningAnchor:
        "Acknowledge how long you've been at this. Not to wallow — to witness yourself honestly.",
      workApproach:
        "Do the minimum viable version of what needs to happen today. Protect your energy. You don't have to go all-out to keep moving.",
      creativePrompt:
        "What has staying in the fight cost me — and what has it built in me?",
      movementEnergy: "slow",
    },
  },
  {
    id: 31,
    name: "Ten of Wands",
    suit: "wands",
    tagline: "put some of it down.",
    description:
      "The Ten of Wands carries too much — all ten staffs bundled and hauled. The destination is close, but the load is unsustainable. Something needs to be set down.",
    ritual: {
      morningAnchor:
        "List everything you're currently carrying — responsibilities, worries, projects. Which ones are actually yours to hold?",
      workApproach:
        "Delegate, defer, or drop one thing today. Not everything that lands on your plate belongs to you.",
      creativePrompt:
        "What am I carrying out of habit or guilt rather than genuine commitment?",
      movementEnergy: "slow",
    },
  },
  {
    id: 32,
    name: "Page of Wands",
    suit: "wands",
    tagline: "be a beginner. it's a gift.",
    description:
      "The Page of Wands holds the staff with curiosity, not expertise. Every master was once this — wide-eyed, enthusiastic, unafraid of looking new.",
    ritual: {
      morningAnchor:
        "Approach something familiar today as if you've never done it before. What would you notice?",
      workApproach:
        "Ask a question you've been too embarrassed to ask. Curiosity over ego today.",
      creativePrompt:
        "What would I try if I gave myself permission to be terrible at it first?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 33,
    name: "Knight of Wands",
    suit: "wands",
    tagline: "full speed. check the direction first.",
    description:
      "The Knight of Wands charges — passionate, fearless, and occasionally reckless. The fire is an asset. The aim matters.",
    ritual: {
      morningAnchor:
        "Before you launch into the day, pause for two minutes. Where is the energy actually trying to go?",
      workApproach:
        "Channel the drive into one focused sprint rather than scattering it across everything. Intensity with direction.",
      creativePrompt:
        "Where is my enthusiasm outpacing my judgment — and is that okay right now?",
      movementEnergy: "intense",
    },
  },
  {
    id: 34,
    name: "Queen of Wands",
    suit: "wands",
    tagline: "warm, bold, and completely yourself.",
    description:
      "The Queen of Wands is magnetic — she commands not through force but through presence. Confident, creative, generous. She knows who she is.",
    ritual: {
      morningAnchor:
        "Name three things about yourself that you genuinely like. Not skills — qualities.",
      workApproach:
        "Lead with warmth today. Your presence is an asset — let people feel it.",
      creativePrompt:
        "What would I do differently if I fully trusted my own instincts?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 35,
    name: "King of Wands",
    suit: "wands",
    tagline: "vision. authority. follow-through.",
    description:
      "The King of Wands has mastered the fire — not by suppressing it but by directing it. Visionary, decisive, and built for the long game.",
    ritual: {
      morningAnchor:
        "Identify the single most important thing you're building right now. Everything else serves that.",
      workApproach:
        "Make a decision you've been sitting on. The King doesn't deliberate forever — he decides and adjusts.",
      creativePrompt:
        "What kind of leader am I becoming — and what does that version of me do differently?",
      movementEnergy: "intense",
    },
  },
];
export const cupsSuit: TarotCard[] = [
  {
    id: 36,
    name: "Ace of Cups",
    suit: "cups",
    tagline: "something is opening. let it.",
    description:
      "The Ace of Cups overflows — pure emotional potential, the beginning of feeling. A new connection, a creative surge, an unexpected tenderness. Receive it.",
    ritual: {
      morningAnchor:
        "Before anything else, ask: what am I feeling right now? Not what you think — what you feel. Just name it.",
      workApproach:
        "Lead with genuine interest today. Ask a real question. Make actual contact with the people in your work.",
      creativePrompt: "What would I make if I was trying to move someone?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 37,
    name: "Two of Cups",
    suit: "cups",
    tagline: "real connection requires showing up.",
    description:
      "The Two of Cups is the mutual recognition — two people seeing each other clearly. Partnership, chemistry, the moment of genuine meeting.",
    ritual: {
      morningAnchor:
        "Think of someone who matters to you. Send them a message today — not to ask for something, just to connect.",
      workApproach:
        "Collaboration over solo effort today. Bring someone in. Two perspectives will take this further than one.",
      creativePrompt:
        "Who in my life do I feel truly seen by — and when did I last tell them?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 38,
    name: "Three of Cups",
    suit: "cups",
    tagline: "celebrate with your people.",
    description:
      "The Three of Cups is the feast, the circle of friends, the communal joy. This is abundance shared — not hoarded, not performed, just felt together.",
    ritual: {
      morningAnchor:
        "Name three people who genuinely support you. Let yourself feel that for a moment.",
      workApproach:
        "Make something collaborative today. Reach out, loop someone in, share credit generously.",
      creativePrompt:
        "When did I last let myself be truly joyful with other people — and what made it feel safe?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 39,
    name: "Four of Cups",
    suit: "cups",
    tagline: "look up. something is being offered.",
    description:
      "The Four of Cups sits under the tree, arms crossed, unmoved by the cup being extended. Contemplation is useful. Withdrawal can become a habit.",
    ritual: {
      morningAnchor:
        "Notice if you're in a low-grade funk today. Name it without judgment — just acknowledge it's there.",
      workApproach:
        "Say yes to something you'd normally decline today. Low stakes, low risk — just practice opening.",
      creativePrompt:
        "What opportunity am I not seeing because I'm too focused on what I don't have?",
      movementEnergy: "slow",
    },
  },
  {
    id: 40,
    name: "Five of Cups",
    suit: "cups",
    tagline: "grieve what spilled. notice what remains.",
    description:
      "The Five of Cups stares at the three spilled cups and ignores the two still standing. The loss is real. So is what's left.",
    ritual: {
      morningAnchor:
        "Acknowledge something you're genuinely grieving — a loss, a disappointment, a version of things that didn't happen. Give it a minute.",
      workApproach:
        "After you've sat with what went wrong, redirect: what is still here and workable?",
      creativePrompt:
        "What am I mourning that I haven't fully allowed myself to grieve?",
      movementEnergy: "slow",
    },
  },
  {
    id: 41,
    name: "Six of Cups",
    suit: "cups",
    tagline: "let the past be warm, not a trap.",
    description:
      "The Six of Cups is nostalgia — the childhood gift, the simpler time, the old sweetness. Memory as nourishment, not escape.",
    ritual: {
      morningAnchor:
        "Think of a memory that makes you genuinely smile. Sit with it for two minutes — not to chase it, just to feel it.",
      workApproach:
        "Return to something you used to love doing — a technique, an approach, a way of working. See if it still fits.",
      creativePrompt:
        "What did I love before I learned to be practical about it?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 42,
    name: "Seven of Cups",
    suit: "cups",
    tagline: "not every vision is a direction.",
    description:
      "The Seven of Cups floats with possibilities — beautiful, seductive, overwhelming. Fantasy has its place. At some point, you have to choose one cup and drink.",
    ritual: {
      morningAnchor:
        "If you have more than three things on your list today, cut it to three. Clarity over volume.",
      workApproach:
        "Pick one thing to go deep on rather than skimming many. The diffusion is the obstacle today.",
      creativePrompt:
        "Which of my current dreams is a real direction — and which ones am I using to avoid committing?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 43,
    name: "Eight of Cups",
    suit: "cups",
    tagline: "leaving is an act of self-respect.",
    description:
      "The Eight of Cups walks away in the night — not dramatically, not angrily. Just done. The cups are full but something is missing. Onward.",
    ritual: {
      morningAnchor:
        "Ask honestly: is there something in my life I've outgrown that I'm still showing up for out of inertia?",
      workApproach:
        "If something isn't working, stop pushing it today. Permission to redirect.",
      creativePrompt:
        "What am I staying in past its expiration date — and what am I afraid I'll lose by leaving?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 44,
    name: "Nine of Cups",
    suit: "cups",
    tagline: "you can want good things for yourself.",
    description:
      "The Nine of Cups is the wish card — satisfied, content, arms crossed over abundance. This is permission to want what you want without apology.",
    ritual: {
      morningAnchor:
        "Name something you want — not what you should want, not what's responsible. What do you actually desire?",
      workApproach:
        "Do one thing today that is purely for your own satisfaction and growth. Not for output. For you.",
      creativePrompt: "If I let myself want more, what would I want?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 45,
    name: "Ten of Cups",
    suit: "cups",
    tagline: "this is what it was all for.",
    description:
      "The Ten of Cups is the rainbow over the house — emotional fulfillment, belonging, the life that actually feels like yours. It exists. It's possible.",
    ritual: {
      morningAnchor:
        "Name one thing in your life right now that genuinely feels good. Not perfect — good.",
      workApproach:
        "Work toward something meaningful today, not just something urgent. Keep the bigger picture in view.",
      creativePrompt:
        "What does a life that feels complete actually look like for me?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 46,
    name: "Page of Cups",
    suit: "cups",
    tagline: "stay open to the surprising feeling.",
    description:
      "The Page of Cups peers into the cup and finds a fish looking back — the unexpected emotional message, the dream that lingers. Stay curious about what you feel.",
    ritual: {
      morningAnchor:
        "Write down whatever you dreamed last night, even fragments. If you don't remember, write what you woke up feeling.",
      workApproach:
        "Follow an intuitive pull today — a hunch, an unexpected interest, something that doesn't quite make logical sense yet.",
      creativePrompt:
        "What is my emotional life trying to tell me that I keep intellectualizing away?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 47,
    name: "Knight of Cups",
    suit: "cups",
    tagline: "ride toward what moves you.",
    description:
      "The Knight of Cups approaches with the cup extended — romantic, idealistic, moved by beauty and feeling. The quest here is the heart's quest.",
    ritual: {
      morningAnchor:
        "What genuinely moves you right now? Not what should move you — what actually does?",
      workApproach:
        "Bring more feeling into the work today. Let what you care about be visible in what you make.",
      creativePrompt:
        "What would I pursue if I followed my heart instead of my strategy?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 48,
    name: "Queen of Cups",
    suit: "cups",
    tagline: "feel deeply. hold steady.",
    description:
      "The Queen of Cups holds the ornate cup without opening it — she feels everything and remains present. Empathy without dissolution. Depth without drowning.",
    ritual: {
      morningAnchor:
        "Check in with your emotional state honestly. Not to fix it — just to know where you actually are.",
      workApproach:
        "Lead with compassion today — for others and for yourself. Emotional intelligence is a skill. Use it.",
      creativePrompt:
        "Where am I absorbing other people's feelings as if they were my own — and where is the boundary?",
      movementEnergy: "slow",
    },
  },
  {
    id: 49,
    name: "King of Cups",
    suit: "cups",
    tagline: "master the feeling. don't suppress it.",
    description:
      "The King of Cups sits steady on the water — emotionally mature, calm under pressure, neither ruled by feeling nor cut off from it. This is emotional authority.",
    ritual: {
      morningAnchor:
        "Before reacting to anything difficult today, pause. One breath. What is the feeling, and what does it actually need?",
      workApproach:
        "Handle anything emotionally charged with steadiness today. You can feel it and still respond thoughtfully.",
      creativePrompt:
        "What would it look like to be fully in touch with my feelings and fully in control of how I express them?",
      movementEnergy: "grounded",
    },
  },
];
export const swordsSuit: TarotCard[] = [
  {
    id: 50,
    name: "Ace of Swords",
    suit: "swords",
    tagline: "cut through. the truth is clean.",
    description:
      "The Ace of Swords breaks through cloud — pure mental clarity, the moment of real understanding. Truth here is a gift, even when it's sharp.",
    ritual: {
      morningAnchor:
        "Name one thing you've been unclear or dishonest with yourself about. Just name it — clarity is the first cut.",
      workApproach:
        "Say the direct thing today. No hedging, no softening past the point of honesty. Clear communication is an act of respect.",
      creativePrompt:
        "What do I know to be true that I've been afraid to say out loud?",
      movementEnergy: "intense",
    },
  },
  {
    id: 51,
    name: "Two of Swords",
    suit: "swords",
    tagline: "the stalemate ends when you look.",
    description:
      "The Two of Swords sits blindfolded, arms crossed, two swords held in balance. The decision is being avoided. The blindfold is a choice.",
    ritual: {
      morningAnchor:
        "Name the decision you've been sitting on. You don't have to make it today — but take the blindfold off and look at it.",
      workApproach:
        "Pick one thing you've been avoiding deciding and make a preliminary call. Even a temporary decision breaks the stalemate.",
      creativePrompt:
        "What am I refusing to see because seeing it would require me to act?",
      movementEnergy: "slow",
    },
  },
  {
    id: 52,
    name: "Three of Swords",
    suit: "swords",
    tagline: "the heart can hold this. let it.",
    description:
      "The Three of Swords is the image everyone knows — three blades through the heart, rain behind. Grief, heartbreak, the painful truth. It is what it is. Feel it.",
    ritual: {
      morningAnchor:
        "If something is hurting right now, give it five minutes of honest attention before you bury it in productivity.",
      workApproach:
        "Be gentle with yourself today. If the work feels hard, that might not be about the work.",
      creativePrompt:
        "What heartbreak am I still carrying that I haven't fully processed?",
      movementEnergy: "slow",
    },
  },
  {
    id: 53,
    name: "Four of Swords",
    suit: "swords",
    tagline: "rest is not retreat.",
    description:
      "The Four of Swords lies in repose — the knight at rest, not in defeat. This is strategic stillness. The mind needs recovery as much as the body.",
    ritual: {
      morningAnchor:
        "Build one real rest period into today before you need it. Schedule it like an appointment.",
      workApproach:
        "Work in focused blocks with genuine breaks between. Not scrolling — actual rest. Step away, breathe, return.",
      creativePrompt:
        "What would happen if I stopped pushing for one full day?",
      movementEnergy: "restorative",
    },
  },
  {
    id: 54,
    name: "Five of Swords",
    suit: "swords",
    tagline: "winning at what cost?",
    description:
      "The Five of Swords collects the swords of the defeated — technically a victory, but the figures walking away tell the real story. Some wins aren't worth it.",
    ritual: {
      morningAnchor:
        "Ask honestly: in any recent conflict, did I handle it in a way I'm proud of? No shame — just honest accounting.",
      workApproach:
        "Choose collaboration over dominance today. The goal is the outcome, not being right.",
      creativePrompt:
        "Where am I prioritizing winning over actually getting what I need?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 55,
    name: "Six of Swords",
    suit: "swords",
    tagline: "calmer waters ahead. keep moving.",
    description:
      "The Six of Swords crosses troubled water toward calmer shores — the figure hunched, the journey quiet. This is the slow passage through difficulty. It's working.",
    ritual: {
      morningAnchor:
        "Acknowledge that you are in transition right now. Name where you're moving away from and where you're headed.",
      workApproach:
        "Keep steady forward motion today — nothing dramatic, just consistent. The shore is closer than it feels.",
      creativePrompt:
        "What am I in the middle of that I need to trust will resolve?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 56,
    name: "Seven of Swords",
    suit: "swords",
    tagline: "be honest about what you're doing.",
    description:
      "The Seven of Swords slips away with the stolen blades — cunning, strategic, not entirely above board. Sometimes this is necessary. Know which kind of day this is.",
    ritual: {
      morningAnchor:
        "Check in: are you being fully straight with yourself and others right now, or are you cutting corners somewhere?",
      workApproach:
        "Do the thing the honest way today, even if the shortcut is available. Integrity compounds.",
      creativePrompt:
        "Where am I being clever instead of honest — and what am I actually avoiding?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 57,
    name: "Eight of Swords",
    suit: "swords",
    tagline: "the blindfold comes off when you're ready.",
    description:
      "The Eight of Swords stands bound and blindfolded, swords surrounding — but loosely bound, and the path out is clear if she looks. The prison is largely mental.",
    ritual: {
      morningAnchor:
        "Name one belief about yourself or your situation that might be keeping you stuck. Is it actually true?",
      workApproach:
        "Challenge one assumption you've been operating under. Ask: what if this constraint isn't as fixed as I think?",
      creativePrompt:
        "What story am I telling myself that is keeping me small?",
      movementEnergy: "slow",
    },
  },
  {
    id: 58,
    name: "Nine of Swords",
    suit: "swords",
    tagline: "3am thoughts are not the truth.",
    description:
      "The Nine of Swords sits up in bed, head in hands, the night full of worry. The anxiety is real. The catastrophe it's predicting usually isn't.",
    ritual: {
      morningAnchor:
        "Write down whatever is worrying you most right now. Getting it out of your head and onto paper shrinks it.",
      workApproach:
        "If anxiety is running the show today, name it. Then ask: what is the one next small action I can actually take?",
      creativePrompt:
        "What am I catastrophizing about — and what is the most realistic version of how this actually plays out?",
      movementEnergy: "slow",
    },
  },
  {
    id: 59,
    name: "Ten of Swords",
    suit: "swords",
    tagline: "it's over. the dawn is coming.",
    description:
      "The Ten of Swords is the dramatic ending — ten blades in the back, face down. But the sky at the horizon is beginning to lighten. It cannot get worse. It won't.",
    ritual: {
      morningAnchor:
        "Acknowledge something that has definitively ended. Name it. Then look for the first sign of what comes next.",
      workApproach:
        "Don't drag out what's already finished. Close the loop, mark it done, and turn toward what's next.",
      creativePrompt:
        "What ending am I still refusing to accept — and what might become possible if I did?",
      movementEnergy: "slow",
    },
  },
  {
    id: 60,
    name: "Page of Swords",
    suit: "swords",
    tagline: "ask the sharp question.",
    description:
      "The Page of Swords holds the blade aloft, alert and watchful — curious, quick, a little restless. The mind is hungry today. Feed it well.",
    ritual: {
      morningAnchor:
        "Read or listen to something that genuinely challenges your thinking before the day starts.",
      workApproach:
        "Ask the question no one else is asking in the room. Intellectual courage is a form of contribution.",
      creativePrompt:
        "What would I investigate if I followed my curiosity without worrying about where it leads?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 61,
    name: "Knight of Swords",
    suit: "swords",
    tagline: "fast and sharp. make sure it's aimed.",
    description:
      "The Knight of Swords charges full gallop — brilliant, decisive, occasionally cutting without meaning to. The speed is the gift and the risk.",
    ritual: {
      morningAnchor:
        "Before you fire off any messages or decisions today, pause once. Is this aimed where you actually want it to go?",
      workApproach:
        "Move decisively but check the impact. Speed plus care is better than speed alone.",
      creativePrompt:
        "Where has my directness served me — and where has it cost me more than I intended?",
      movementEnergy: "intense",
    },
  },
  {
    id: 62,
    name: "Queen of Swords",
    suit: "swords",
    tagline: "clear eyes. kind heart. no nonsense.",
    description:
      "The Queen of Swords has seen things. She is precise, direct, and fair — not cold, but unwilling to pretend. She earned her clarity.",
    ritual: {
      morningAnchor:
        "Set one clear boundary or expectation today. State it plainly, without over-explaining.",
      workApproach:
        "Cut through any fog in your work today — name the actual problem, the actual obstacle, the actual next step.",
      creativePrompt:
        "What would I say if I stopped softening everything to make it more palatable?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 63,
    name: "King of Swords",
    suit: "swords",
    tagline: "think clearly. lead with integrity.",
    description:
      "The King of Swords holds his blade upright — authority through clarity, leadership through principle. He decides based on what is true, not what is comfortable.",
    ritual: {
      morningAnchor:
        "Identify the decision or situation today that requires the clearest thinking. Give it your best mind, not your tired mind.",
      workApproach:
        "Lead with logic and fairness today. If something doesn't make sense, say so. If it does, commit.",
      creativePrompt:
        "What would I decide if I removed emotion, ego, and fear from the equation — and is that actually the right call?",
      movementEnergy: "grounded",
    },
  },
];
export const pentaclesSuit: TarotCard[] = [
  {
    id: 64,
    name: "Ace of Pentacles",
    suit: "pentacles",
    tagline: "a real opportunity. take it seriously.",
    description:
      "The Ace of Pentacles is the hand extending a coin from the clouds — a concrete offer, a material beginning, a seed of real prosperity. This one is tangible.",
    ritual: {
      morningAnchor:
        "Name one practical opportunity in front of you right now. Not a dream — something you could actually act on today.",
      workApproach:
        "Do one thing today that builds something real and lasting. Not busy work — foundation work.",
      creativePrompt:
        "What would I start if I believed it could actually become something?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 65,
    name: "Two of Pentacles",
    suit: "pentacles",
    tagline: "keep juggling. find your rhythm.",
    description:
      "The Two of Pentacles juggles two coins in an infinity loop — the dance of balance, the constant adjustment. This is not chaos. This is skill.",
    ritual: {
      morningAnchor:
        "Look at everything competing for your attention today. Can you find a rhythm rather than a collision?",
      workApproach:
        "Alternate between tasks deliberately rather than reactively. Control the juggle — don't let it control you.",
      creativePrompt:
        "What in my life needs better rhythm rather than more effort?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 66,
    name: "Three of Pentacles",
    suit: "pentacles",
    tagline: "good work done together.",
    description:
      "The Three of Pentacles is the craftsman consulting with the architects — skill, collaboration, the pride of work done well in community. Mastery is not solo.",
    ritual: {
      morningAnchor:
        "Acknowledge one person whose work or support has made your work better. Even silently.",
      workApproach:
        "Bring craft to what you're building today. Not just completion — quality. Take the extra step.",
      creativePrompt:
        "What would my work look like if I treated it as a genuine craft rather than just a task?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 67,
    name: "Four of Pentacles",
    suit: "pentacles",
    tagline: "security is good. hoarding is fear.",
    description:
      "The Four of Pentacles clutches the coins — one on the head, one under each foot, one to the chest. Stability is wise. Grip that tight is anxiety wearing a crown.",
    ritual: {
      morningAnchor:
        "Notice where you're holding on tightly today — to money, to control, to a plan. Is it security or fear?",
      workApproach:
        "Share something today — credit, knowledge, a resource. Practice the open hand.",
      creativePrompt:
        "What am I holding so tightly that it's stopped being useful?",
      movementEnergy: "slow",
    },
  },
  {
    id: 68,
    name: "Five of Pentacles",
    suit: "pentacles",
    tagline: "you are not as alone as you feel.",
    description:
      "The Five of Pentacles trudges through snow past the lit church window — cold, excluded, struggling. The help is closer than it appears. Look up.",
    ritual: {
      morningAnchor:
        "If you're in a hard season right now, name it honestly. Then name one person or resource you haven't reached out to yet.",
      workApproach:
        "Ask for help today. Something specific, from someone real. Pride is expensive.",
      creativePrompt:
        "What support am I refusing because accepting it feels like admitting defeat?",
      movementEnergy: "restorative",
    },
  },
  {
    id: 69,
    name: "Six of Pentacles",
    suit: "pentacles",
    tagline: "give and receive with open hands.",
    description:
      "The Six of Pentacles holds the scales and distributes coins — generosity, fair exchange, the flow of resources. Notice today whether you're giving, receiving, or both.",
    ritual: {
      morningAnchor:
        "Think about the balance of giving and receiving in your life right now. Is it roughly fair? What needs adjusting?",
      workApproach:
        "Be genuinely generous with something today — time, knowledge, recognition. And if someone offers help, accept it.",
      creativePrompt:
        "Where in my life am I out of balance between giving and receiving?",
      movementEnergy: "fluid",
    },
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    suit: "pentacles",
    tagline: "tend it. then trust the season.",
    description:
      "The Seven of Pentacles leans on the hoe and surveys the growing crop — the long-game check-in. Is this worth continuing? The answer is usually yes, but ask honestly.",
    ritual: {
      morningAnchor:
        "Look at something you've been building for a while. Is it growing? What does it need right now?",
      workApproach:
        "Assess before you act today. Is the effort you're putting in going where it needs to go?",
      creativePrompt:
        "What am I tending that I need to trust will bear fruit in its own time?",
      movementEnergy: "slow",
    },
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    suit: "pentacles",
    tagline: "do the work. do it well. repeat.",
    description:
      "The Eight of Pentacles hammers coin after coin — the apprentice in full devotion to craft. Repetition here is not monotony. It's the path to mastery.",
    ritual: {
      morningAnchor:
        "Pick one skill you're developing. Do something to practice it today — even 20 minutes of focused work.",
      workApproach:
        "Go deep on one thing today rather than wide on many. Quality of attention over quantity of output.",
      creativePrompt:
        "What would I get genuinely good at if I committed to the repetition?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    suit: "pentacles",
    tagline: "you built this. enjoy it.",
    description:
      "The Nine of Pentacles stands in the garden of her own making — independent, abundant, self-possessed. This is the fruit of real work. Let yourself have it.",
    ritual: {
      morningAnchor:
        "Name something in your life that exists because of your own effort and choices. Let yourself feel good about it.",
      workApproach:
        "Work with confidence today. You have earned your place at this table.",
      creativePrompt:
        "What have I built that I keep underselling or taking for granted?",
      movementEnergy: "expressive",
    },
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    suit: "pentacles",
    tagline: "legacy is built in the everyday.",
    description:
      "The Ten of Pentacles is the multigenerational scene — the elder, the children, the dogs, the estate. What endures is what was built with care over time.",
    ritual: {
      morningAnchor:
        "Think about what you're building that will outlast today. Even small things — habits, relationships, skills — compound.",
      workApproach:
        "Do something today with the long game in mind. Not just what finishes the task, but what builds the foundation.",
      creativePrompt:
        "What do I want to have built when I look back on this period of my life?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 74,
    name: "Page of Pentacles",
    suit: "pentacles",
    tagline: "study it. take it seriously.",
    description:
      "The Page of Pentacles holds the coin up and examines it — studious, grounded, genuinely interested in how things work. Learning is the work today.",
    ritual: {
      morningAnchor:
        "Learn one concrete thing today — a skill, a concept, a process. Make it specific and practical.",
      workApproach:
        "Approach your work like a student today — with curiosity about how to do it better, not just how to get it done.",
      creativePrompt:
        "What do I want to understand more deeply — and what's stopping me from studying it?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    suit: "pentacles",
    tagline: "slow, steady, and it gets done.",
    description:
      "The Knight of Pentacles sits still on a heavy horse — methodical, reliable, unhurried. Not flashy. Finishes what he starts. Every time.",
    ritual: {
      morningAnchor:
        "Pick one thing you've been putting off and commit to finishing it today. Not starting — finishing.",
      workApproach:
        "Reliable and thorough over fast and scattered today. Do less, but complete it.",
      creativePrompt:
        "What would change if I became someone who always follows through?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    suit: "pentacles",
    tagline: "tend yourself. tend your world.",
    description:
      "The Queen of Pentacles sits in her abundant garden, the rabbit at her feet — practical, nurturing, deeply capable. She tends to herself so she can tend to everything else.",
    ritual: {
      morningAnchor:
        "Do one thing this morning that is purely about taking care of your body or your space. Not productivity — care.",
      workApproach:
        "Bring warmth and practicality to your work today. The details matter. So does the humanity.",
      creativePrompt:
        "What would change in my life if I treated my own wellbeing as a non-negotiable priority?",
      movementEnergy: "grounded",
    },
  },
  {
    id: 77,
    name: "King of Pentacles",
    suit: "pentacles",
    tagline: "mastery. abundance. earned.",
    description:
      "The King of Pentacles sits on his throne of vines and coins — the self-made authority, the one who turned vision into reality through patience and work. This is what it looks like to arrive.",
    ritual: {
      morningAnchor:
        "Name one area of your life where you have genuine expertise or hard-won knowledge. Own it today.",
      workApproach:
        "Make a decision today from a place of confidence and experience — not anxiety. You know more than you think.",
      creativePrompt:
        "What would I do differently if I fully believed in my own competence?",
      movementEnergy: "grounded",
    },
  },
];
export const fullDeck: TarotCard[] = [
  ...majorArcana,
  ...wandsSuit,
  ...cupsSuit,
  ...swordsSuit,
  ...pentaclesSuit,
];
