#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DemoawspipelineStack } from '../lib/demoawspipeline-stack';

const app = new cdk.App();
new DemoawspipelineStack(app, 'DemoawspipelineStack', {
  env: { account: '123456789012', region: 'us-east-1' },
});