import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const Ver = ({seleccionado}) => (
  <Modal 
  dimmer={'blurring'}
  trigger={
    <Button color="blue" animated >
      <Button.Content visible>
        <Icon name="eye"/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name="right arrow" />
      </Button.Content>
    </Button>
            }>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        <p>
          This is an example of expanded content that will cause the modal's
          dimmer to scroll
        </p>

        {_.times(8, (i) => (
          <Image
            key={i}
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ paddingBottom: 5 }}
          />
        ))}
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default Ver
