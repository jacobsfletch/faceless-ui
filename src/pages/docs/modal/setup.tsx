import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { VersionNumber } from '@components/VersionNumber';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';

const ModalSetupDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Modal Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="modal"
          element='span'
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/modal/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="modal" />
      </Margin>
      <p>
        {'First, wrap your app with the provider. This component does not render anything, and should be nearest to the top of your app as possible. This is where the '}
        <Hyperlink
          href="/docs/modal/api#provider-props"
          underline
        >
          global settings
        </Hyperlink>
        {' are defined.'}
      </p>
      <p>
        {'Anywhere inside of this, render the'}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#container"
          >
            {'<ModalContainer>'}
          </Hyperlink>
        </InlineCode>
        {'. This is where each modal will portal into, so its often best to keep this relatively high in your tree.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { ModalProvider, ModalContainer } from \'@faceless-ui/modal\';

export const MyApp = () => {
  return (
    <ModalProvider transTime={250}>
      <ModalContainer />
    </ModalProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Now to create a modal, render a '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#modal"
          >
            {'<Modal>'}
          </Hyperlink>
        </InlineCode>
        {' component anywhere in your app. The only required prop is the unique slug that identifies this modal.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { Modal } from \'@faceless-ui/modal\';

export const MyComponent = () => {
  return (
    <Modal slug="my-modal">
      <h1>
        Hello, world!
      </h1>
    </Modal>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'The simplest way to open and close the modal is to use the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#toggler"
          >
            {'<ModalToggler>'}
          </Hyperlink>
        </InlineCode>
        {' component. This component takes the slug of any modal and toggles it open or closed based on the current state of that modal.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { ModalToggler } from \'@faceless-ui/modal\';

export const MyComponent = () => {
  return (
    <ModalToggler slug="my-modal">
      Toggle
    </ModalToggler>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'You can also read '}
        <Hyperlink
          underline
          href="/docs/modal/api#context"
        >
          modal context
        </Hyperlink>
        {' directly. The easiest way to do this is with the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#useModal"
          >
            useModal
          </Hyperlink>
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { useModal } from \'@faceless-ui/modal\';

export const MyComponent = (props) => {
    const modal = useModal();
    return (
      ...
    );
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'For more advanced setups, see the full '}
        <Hyperlink
          underline
          href="/docs/modal/api"
        >
          API reference
        </Hyperlink>
        .
      </p>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/setup.tsx`}
    />
  )
};

ModalSetupDoc.Layout = DocLayout;

export default ModalSetupDoc;
