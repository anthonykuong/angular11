module.exports = {
  name: "trivia",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/trivia",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js"
  ]
};
