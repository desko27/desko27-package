#!/usr/bin/env node
require('@babel/register')({
  presets: [['@babel/preset-env'], ['@babel/preset-react']]
})
require('../src/app')
