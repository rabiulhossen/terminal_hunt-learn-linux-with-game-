export const filesystem = {
  home: {
    you: {
      "diary.txt": [
        "The captain's final diary entry.",
        "The treasure is hidden somewhere on this ship.",
      ],
      "notes.txt": [
        "Remember to check the ship logs.",
      ],
    },
  },

  var: {
    logs: {
      "ship.log": [
        "Day 01 - We left the harbor.",
        "Day 05 - The sea became rough.",
        "Day 07 - Barometer: 0397 hPa.",
      ],
    },
  },

  treasure: {
    "flag.txt": [
      "Congratulations!",
      "You found the treasure!",
    ],
  },
};

export function getNode(path: string[]) {
  let node: any = filesystem;

  for (const part of path) {
    node = node[part];
  }

  return node;
}

export function isDirectory(path: string[]) {
  const node = getNode(path);

  return typeof node === "object" && !Array.isArray(node);
}