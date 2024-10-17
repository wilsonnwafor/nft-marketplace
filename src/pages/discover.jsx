import { Avatar, Identity, Name, Badge, Address } from '@coinbase/onchainkit/identity';
import '@coinbase/onchainkit/styles.css';

const Discover = () => {
  return (
    <div className="mt-16">
      <Identity
        address="0x1AB850C0FFA3fe879B501fca9127f29d03464F46"
        schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
      >
        <Avatar />
        <Name>
          <Badge />
        </Name>
        <Address />
      </Identity> 
    </div>
  )
}

export default Discover;


 
