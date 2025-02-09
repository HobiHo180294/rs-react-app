import { PhotoDetailsContentBaseProps } from '../model';

export const PhotoDetailsContentBase = ({
  renderAbsoluteElements,
  renderTitle,
  renderDescription,
  renderTopics,
  renderStats,
  renderUserInfo,
  renderMore,
}: PhotoDetailsContentBaseProps) => (
  <div className="p-6 h-full overflow-y-auto flex flex-col relative">
    {renderAbsoluteElements?.()}
    <div className="flex-1 space-y-6">
      {renderTitle()}
      <div className="space-y-2">{renderDescription()}</div>
      <div className="space-y-2">{renderTopics()}</div>
      <div className="flex justify-between py-4 border-t border-b border-gray-200">
        {renderStats()}
      </div>
      {renderUserInfo()}
    </div>
    {renderMore()}
  </div>
);
