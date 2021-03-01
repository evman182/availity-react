import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle } from 'reactstrap';
import { avLogMessagesApi } from '@availity/api-axios';
import { useToggle } from '@availity/hooks';
import FeedbackDropdown from './FeedbackDropdown';
import FeedbackModal from './FeedbackModal';

const Feedback = ({
  appName,
  modal,
  zIndex,
  supportZIndex,
  children,
  analytics,
  className,
  outline,
  color,
  formProps,
  prompt,
  onFeedbackSent,
  showSupport,
  ...props
}) => {
  const [feedbackIsOpen, feedbackToggle] = useToggle(false);
  const [supportIsOpen, supportToggle] = useToggle(false);

  return (
    <Dropdown
      isOpen={feedbackIsOpen && !modal}
      toggle={() => feedbackToggle()}
      className={`${className} hidden-print`}
      {...props}
    >
      <DropdownToggle color={color} outline={outline}>
        {children || 'Give Feedback'}
      </DropdownToggle>
      {modal ? (
        <FeedbackModal
          onFeedbackSent={onFeedbackSent}
          prompt={prompt}
          isOpen={feedbackIsOpen}
          zIndex={zIndex}
          toggle={() => feedbackToggle()}
          name={appName}
          analytics={analytics}
          showSupport={showSupport}
          supportZIndex={supportZIndex}
          {...formProps}
        />
      ) : (
        <FeedbackDropdown
          onFeedbackSent={onFeedbackSent}
          prompt={prompt}
          analytics={analytics}
          toggle={() => feedbackToggle()}
          name={appName}
          showSupport={showSupport}
          supportIsOpen={supportIsOpen}
          supportToggle={supportToggle}
          supportZIndex={supportZIndex}
          modal={modal}
          {...formProps}
        />
      )}
    </Dropdown>
  );
};

Feedback.propTypes = {
  appName: PropTypes.string,
  modal: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  supportZIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  outline: PropTypes.bool,
  color: PropTypes.string,
  formProps: PropTypes.object,
  prompt: PropTypes.string,
  onFeedbackSent: PropTypes.func,
  analytics: PropTypes.shape({
    info: PropTypes.func.isRequired,
  }),
  showSupport: PropTypes.bool,
};

Feedback.defaultProps = {
  modal: false,
  color: 'light',
  analytics: avLogMessagesApi,
  showSupport: false,
};

export default Feedback;
