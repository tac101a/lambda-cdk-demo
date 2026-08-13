import * as cdk from 'aws-cdk-lib/core';
import { Template } from 'aws-cdk-lib/assertions';
import * as LambdaCdkDemo from '../lib/lambda-cdk-demo-stack';

test('Lambda Function Created', () => {
  const app = new cdk.App();
  const stack = new LambdaCdkDemo.LambdaCdkDemoStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'handler.handler',
    Runtime: 'python3.12',
  });
});

