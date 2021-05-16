module.exports = {
  name: 'profile-update',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/profile-update',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
