import Modal from '@/components/modal';
import { useState } from 'react';
import { Button, Input } from '@telegram-apps/telegram-ui';
import searchIcon from '@/assets/icons/search-icon.svg';

export const FilterBySearch = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Input
      header="Search"
      placeholder="Johny Depp"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      after={<img className="h-6 w-6" src={searchIcon} alt="" />}
    />
  );
};

export const FilterByTag = ({
  tags,
  setSelectedTag,
}: {
  tags: string[];
  setSelectedTag: (tag: string | null) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState('No tag selected');
  const [buttonMode, setButtonMode] = useState('outline');

  const handleTagSet = (tag: string) => {
    setSelectedTag(tag);
    setButtonText(tag);
    setButtonMode('filled');
    setOpen(false);
  };

  const handleReset = () => {
    setSelectedTag(null);
    setButtonText('No tag selected');
    setOpen(false);
    setButtonMode('outline');
  };

  return (
    <div>
      <Button
        mode={buttonMode as 'outline'}
        onClick={() => setOpen(true)}
        className={'text-xs'}
      >
        {buttonText}
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="text-center text-3xl mb-4">Filter by tag</div>
        <div className="mb-8">
          {tags.map((tag) => (
            <Button
              mode={'bezeled'}
              onClick={() => {
                handleTagSet(tag);
              }}
            >
              {tag}
            </Button>
          ))}
        </div>
        <Button onClick={handleReset} stretched={true}>
          Reset
        </Button>
      </Modal>
    </div>
  );
};

export const FilterByLatest = ({
  enable,
  disable,
}: {
  enable: () => void;
  disable: () => void;
}) => {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    if (enabled) {
      disable();
      setEnabled(false);
    } else {
      enable();
      setEnabled(true);
    }
  };

  return (
    <div>
      <Button mode={enabled ? 'filled' : 'outline'} onClick={handleToggle}>
        Filter by latest
      </Button>
    </div>
  );
};
