module.exports = {
  name: 'abstractions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/abstractions',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
