import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './Icon.css';

export type TypeIcon =
  'Backward' |
  'Beginning' |
  'Book' |
  'ChevronLeft' |
  'ChevronRight' |
  'Circle' |
  'Cloud' |
  'Code' |
  'Cog' |
  'Command' |
  'Copy' |
  'Cross' |
  'Delete' |
  'End' |
  'Error' |
  'ExternalLink' |
  'Eye' |
  'Forward' |
  'Github' |
  'File' |
  'Info' |
  'Letter' |
  'Maximize' |
  'Menu' |
  'Minimize' |
  'Moon' |
  'Pause' |
  'Pencil' |
  'Play' |
  'QuestionMark' |
  'Redo' |
  'Refresh' |
  'Save' |
  'Shuffle' |
  'Square' |
  'Star' |
  'Sun' |
  'Terminal' |
  'Triangle' |
  'Twitter' |
  'Undo' |
  'Water';

export const IconPathMap: { [key in TypeIcon]: string[] } = {
  'Backward': [
    'M486.4 174.933c-12.8-8.533-34.133-4.267-46.933 4.267l-384 298.667c-8.533 8.533-12.8 21.333-12.8 34.133s4.267 25.6 17.067 34.133l384 298.667c8.533 4.267 17.067 8.533 25.6 8.533 4.267 0 12.8 0 17.067-4.267 12.8-8.533 25.6-21.333 25.6-38.4v-597.333c0-17.067-8.533-29.867-25.6-38.4zM426.667 725.333l-273.067-213.333 273.067-213.333v426.667z',
    'M955.733 174.933c-12.8-8.533-34.133-4.267-46.933 4.267l-384 298.667c-8.533 8.533-12.8 21.333-12.8 34.133s4.267 25.6 17.067 34.133l384 298.667c8.533 4.267 17.067 8.533 25.6 8.533 4.267 0 12.8 0 17.067-4.267 12.8-8.533 25.6-21.333 25.6-38.4v-597.333c0-17.067-8.533-29.867-25.6-38.4zM896 725.333l-273.067-213.333 273.067-213.333v426.667z',
  ],
  'Beginning': [
    'M827.733 132.267c-12.8-8.533-34.133-4.267-46.933 4.267l-426.667 341.333c-8.533 8.533-12.8 21.333-12.8 34.133s4.267 25.6 17.067 34.133l426.667 341.333c8.533 4.267 17.067 8.533 25.6 8.533 4.267 0 12.8 0 17.067-4.267 12.8-8.533 25.6-21.333 25.6-38.4v-682.667c0-17.067-8.533-29.867-25.6-38.4zM768 763.733l-315.733-251.733 315.733-251.733v503.467z',
    'M213.333 170.667c-25.6 0-42.667 17.067-42.667 42.667v597.333c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-597.333c0-25.6-17.067-42.667-42.667-42.667z',
  ],
  'Book': [
    'M853.333 42.667h-576c-81.067 0-149.333 68.267-149.333 149.333v640c0 81.067 68.267 149.333 149.333 149.333h576c25.6 0 42.667-17.067 42.667-42.667v-853.333c0-25.6-17.067-42.667-42.667-42.667zM277.333 128h533.333v554.667h-533.333c-21.333 0-42.667 4.267-64 17.067v-507.733c0-34.133 29.867-64 64-64zM277.333 896c-34.133 0-64-29.867-64-64s29.867-64 64-64h533.333v128h-533.333z',
  ],
  'ChevronLeft': [
    'M443.733 512l226.133-226.133c17.067-17.067 17.067-42.667 0-59.733s-42.667-17.067-59.733 0l-256 256c-17.067 17.067-17.067 42.667 0 59.733l256 256c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733l-226.133-226.133z',
  ],
  'ChevronRight': [
    'M669.867 482.133l-256-256c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l226.133 226.133-226.133 226.133c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8l256-256c17.067-17.067 17.067-42.667 0-59.733z',
  ],
  'Circle': [
    'M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM512 896c-213.333 0-384-170.667-384-384s170.667-384 384-384c213.333 0 384 170.667 384 384s-170.667 384-384 384z',
  ],
  'Cloud': [
    'M768 469.333c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661-19.072 89.728-50.005 120.661-73.515 50.005-120.661 50.005h-383.787c-62.421-0.341-121.728-19.669-170.88-53.675-56.917-39.339-100.181-98.304-118.784-170.325-20.608-79.872-6.955-160.469 31.915-226.347s102.741-116.864 182.613-137.515 160.469-6.955 226.347 31.915 116.864 102.741 137.515 182.613c4.907 18.56 21.547 32 41.301 32zM768 384h-22.187c-30.933-87.765-91.435-158.208-167.040-202.795-84.608-49.877-188.373-67.541-291.029-41.003s-184.917 92.16-234.795 176.768-67.499 188.373-41.003 291.029c23.893 92.544 79.659 168.576 152.875 219.179 63.061 43.648 139.136 68.395 218.965 68.821h384.213c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035-28.715-134.741-74.965-181.035-110.336-74.965-181.035-74.965z',
  ],
  'Code': [
    'M968.533 482.133l-256-256c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l226.133 226.133-226.133 226.133c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8l256-256c17.067-17.067 17.067-42.667 0-59.733z',
    'M371.2 226.133c-17.067-17.067-42.667-17.067-59.733 0l-256 256c-17.067 17.067-17.067 42.667 0 59.733l256 256c8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733l-226.133-226.133 226.133-226.133c17.067-17.067 17.067-42.667 0-59.733z',
  ],
  'Cog': [
    'M512 341.333c-93.867 0-170.667 76.8-170.667 170.667s76.8 170.667 170.667 170.667c93.867 0 170.667-76.8 170.667-170.667s-76.8-170.667-170.667-170.667zM512 597.333c-46.933 0-85.333-38.4-85.333-85.333s38.4-85.333 85.333-85.333c46.933 0 85.333 38.4 85.333 85.333s-38.4 85.333-85.333 85.333z',
    'M866.133 657.067c4.267-8.533 12.8-17.067 29.867-17.067 72.533 0 128-55.467 128-128s-55.467-128-128-128h-8.533c-8.533 0-17.067-4.267-21.333-12.8 0-4.267 0-4.267-4.267-8.533-4.267-8.533-4.267-21.333 8.533-34.133 51.2-51.2 51.2-132.267 0-179.2v0c0 0 0 0 0 0-25.6-25.6-55.467-38.4-89.6-38.4 0 0 0 0 0 0-34.133 0-68.267 12.8-93.867 38.4-8.533 8.533-21.333 8.533-29.867 4.267-8.533 0-17.067-12.8-17.067-25.6 0-72.533-55.467-128-128-128s-128 55.467-128 128v8.533c0 8.533-4.267 17.067-12.8 21.333-4.267 0-4.267 0-8.533 4.267-8.533 4.267-21.333 0-34.133-8.533-51.2-51.2-132.267-51.2-179.2 0-51.2 51.2-51.2 132.267 4.267 183.467 8.533 8.533 8.533 21.333 4.267 34.133-4.267 8.533-17.067 17.067-29.867 17.067-72.533 0-128 55.467-128 128s55.467 128 128 128h8.533c12.8 0 21.333 8.533 25.6 17.067s4.267 21.333-8.533 34.133c-25.6 25.6-38.4 55.467-38.4 89.6s12.8 64 38.4 89.6c0 0 0 0 0 0 51.2 51.2 132.267 51.2 183.467-4.267 8.533-8.533 21.333-8.533 34.133-4.267s17.067 12.8 17.067 29.867c0 72.533 55.467 128 128 128s128-55.467 128-128v-8.533c0-12.8 8.533-21.333 17.067-25.6s21.333-4.267 34.133 8.533c51.2 51.2 132.267 51.2 179.2 0 51.2-51.2 51.2-132.267-4.267-183.467-4.267-8.533-8.533-21.333-4.267-29.867 0 0 0 0 0 0zM789.333 622.933c-17.067 42.667-8.533 89.6 25.6 128 8.533 8.533 12.8 17.067 12.8 29.867s-4.267 21.333-12.8 29.867c-8.533 8.533-17.067 12.8-29.867 12.8 0 0 0 0 0 0-12.8 0-21.333-4.267-34.133-17.067-34.133-34.133-81.067-42.667-123.733-21.333-42.667 17.067-68.267 59.733-68.267 102.4v8.533c0 25.6-17.067 42.667-42.667 42.667s-42.667-17.067-42.667-42.667c0 0 0-4.267 0-4.267 0-46.933-29.867-85.333-72.533-102.4-12.8-8.533-29.867-8.533-46.933-8.533-29.867 0-59.733 12.8-81.067 34.133-17.067 17.067-42.667 17.067-59.733 0 0 0 0 0 0 0v0c-8.533-8.533-12.8-17.067-12.8-29.867s4.267-21.333 17.067-34.133c34.133-34.133 42.667-81.067 21.333-123.733-17.067-42.667-59.733-68.267-102.4-68.267h-8.533c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667c0 0 4.267 0 4.267 0 46.933 0 85.333-29.867 102.4-72.533s8.533-89.6-25.6-128c-17.067-17.067-17.067-42.667 0-59.733s42.667-17.067 64 4.267c29.867 29.867 76.8 38.4 115.2 25.6 4.267 0 8.533 0 12.8-4.267 42.667-17.067 68.267-59.733 68.267-102.4v-8.533c0-25.6 17.067-42.667 42.667-42.667s42.667 17.067 42.667 46.933c0 46.933 25.6 85.333 68.267 102.4s89.6 8.533 128-25.6c8.533-8.533 17.067-12.8 29.867-12.8v0c12.8 0 21.333 4.267 29.867 12.8 0 0 0 0 0 0 17.067 17.067 17.067 42.667-4.267 64-29.867 29.867-38.4 76.8-25.6 115.2 0 4.267 0 8.533 4.267 12.8 17.067 42.667 59.733 68.267 102.4 68.267h8.533c25.6 0 42.667 17.067 42.667 42.667s-17.067 42.667-46.933 42.667c-42.667-0-85.333 25.6-102.4 68.267z',
  ],
  'Command': [
    'M682.667 682.667h85.333c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331zM341.333 682.667v85.333c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003zM341.333 341.333h-85.333c-23.595 0-44.843-9.515-60.331-25.003s-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM682.667 341.333h-341.333v341.333h341.333zM768 170.667c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003h-85.333v-85.333c0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003zM426.667 426.667v-170.667c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005zM426.667 597.333h-170.667c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 597.333v170.667c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005zM597.333 426.667v170.667h-170.667v-170.667zM768 85.333c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661v170.667h170.667c47.104 0 89.856-19.157 120.661-50.005s50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005z',
  ],
  'Copy': [
    'M853.333 341.333h-384c-72.533 0-128 55.467-128 128v384c0 72.533 55.467 128 128 128h384c72.533 0 128-55.467 128-128v-384c0-72.533-55.467-128-128-128zM896 853.333c0 25.6-17.067 42.667-42.667 42.667h-384c-25.6 0-42.667-17.067-42.667-42.667v-384c0-25.6 17.067-42.667 42.667-42.667h384c25.6 0 42.667 17.067 42.667 42.667v384z',
    'M213.333 597.333h-42.667c-25.6 0-42.667-17.067-42.667-42.667v-384c0-25.6 17.067-42.667 42.667-42.667h384c25.6 0 42.667 17.067 42.667 42.667v42.667c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-42.667c0-72.533-55.467-128-128-128h-384c-72.533 0-128 55.467-128 128v384c0 72.533 55.467 128 128 128h42.667c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667z',
  ],
  'Cross': [
    'M571.733 512l226.133-226.133c17.067-17.067 17.067-42.667 0-59.733s-42.667-17.067-59.733 0l-226.133 226.133-226.133-226.133c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l226.133 226.133-226.133 226.133c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8l226.133-226.133 226.133 226.133c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733l-226.133-226.133z',
  ],
  'Delete': [
    'M896 213.333h-170.667v-42.667c0-72.533-55.467-128-128-128h-170.667c-72.533 0-128 55.467-128 128v42.667h-170.667c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h42.667v554.667c0 72.533 55.467 128 128 128h426.667c72.533 0 128-55.467 128-128v-554.667h42.667c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667zM384 170.667c0-25.6 17.067-42.667 42.667-42.667h170.667c25.6 0 42.667 17.067 42.667 42.667v42.667h-256v-42.667zM768 853.333c0 25.6-17.067 42.667-42.667 42.667h-426.667c-25.6 0-42.667-17.067-42.667-42.667v-554.667h512v554.667z',
    'M426.667 426.667c-25.6 0-42.667 17.067-42.667 42.667v256c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-256c0-25.6-17.067-42.667-42.667-42.667z',
    'M597.333 426.667c-25.6 0-42.667 17.067-42.667 42.667v256c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-256c0-25.6-17.067-42.667-42.667-42.667z',
  ],
  'End': [
    'M238.933 136.533c-12.8-8.533-29.867-12.8-42.667-4.267-17.067 8.533-25.6 21.333-25.6 38.4v682.667c0 17.067 8.533 29.867 25.6 38.4 4.267 4.267 12.8 4.267 17.067 4.267 8.533 0 17.067-4.267 25.6-8.533l426.667-341.333c8.533-8.533 17.067-21.333 17.067-34.133s-4.267-25.6-17.067-34.133l-426.667-341.333zM256 763.733v-503.467l315.733 251.733-315.733 251.733z',
    'M810.667 170.667c-25.6 0-42.667 17.067-42.667 42.667v597.333c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-597.333c0-25.6-17.067-42.667-42.667-42.667z',
  ],
  'Error': [
    'M981.333 746.667l-358.4-605.867c-17.067-29.867-46.933-51.2-81.067-59.733s-68.267-4.267-98.133 12.8c-17.067 8.533-34.133 25.6-42.667 42.667 0 0 0 0 0 0l-358.4 610.133c-34.133 59.733-12.8 140.8 46.933 174.933 17.067 12.8 38.4 17.067 59.733 17.067h725.333c34.133 0 68.267-12.8 89.6-38.4 25.6-25.6 38.4-55.467 38.4-89.6-4.267-21.333-8.533-46.933-21.333-64zM904.533 840.533c-8.533 8.533-21.333 12.8-29.867 12.8h-725.333c-8.533 0-12.8 0-21.333-4.267-21.333-12.8-25.6-38.4-17.067-59.733l362.667-601.6c4.267-4.267 8.533-12.8 12.8-12.8 21.333-12.8 46.933-4.267 59.733 12.8l362.667 601.6c4.267 4.267 4.267 12.8 4.267 21.333 4.267 12.8-4.267 21.333-8.533 29.867z',
    'M512 341.333c-25.6 0-42.667 17.067-42.667 42.667v170.667c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-170.667c0-25.6-17.067-42.667-42.667-42.667z',
    'M482.133 695.467c-8.533 8.533-12.8 17.067-12.8 29.867s4.267 21.333 12.8 29.867c8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8c8.533-8.533 12.8-21.333 12.8-29.867s-4.267-21.333-12.8-29.867c-17.067-17.067-42.667-17.067-59.733 0z',
  ],
  'ExternalLink': [
    'M768 512c-25.6 0-42.667 17.067-42.667 42.667v256c0 25.6-17.067 42.667-42.667 42.667h-469.333c-25.6 0-42.667-17.067-42.667-42.667v-469.333c0-25.6 17.067-42.667 42.667-42.667h256c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667h-256c-72.533 0-128 55.467-128 128v469.333c0 72.533 55.467 128 128 128h469.333c72.533 0 128-55.467 128-128v-256c0-25.6-17.067-42.667-42.667-42.667z',
    'M934.4 110.933c-4.267-8.533-12.8-17.067-21.333-21.333-4.267-4.267-12.8-4.267-17.067-4.267h-256c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h153.6l-396.8 396.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8l396.8-396.8v153.6c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-256c0-4.267 0-12.8-4.267-17.067z',
  ],
  'Eye': [
    'M1019.733 494.933c-8.533-17.067-187.733-366.933-507.733-366.933s-499.2 349.867-507.733 366.933c-4.267 12.8-4.267 25.6 0 38.4 8.533 12.8 187.733 362.667 507.733 362.667s499.2-349.867 507.733-366.933c4.267-8.533 4.267-25.6 0-34.133zM512 810.667c-230.4 0-379.733-230.4-422.4-298.667 38.4-68.267 192-298.667 422.4-298.667s379.733 230.4 422.4 298.667c-42.667 68.267-192 298.667-422.4 298.667z',
    'M512 341.333c-93.867 0-170.667 76.8-170.667 170.667s76.8 170.667 170.667 170.667c93.867 0 170.667-76.8 170.667-170.667s-76.8-170.667-170.667-170.667zM512 597.333c-46.933 0-85.333-38.4-85.333-85.333s38.4-85.333 85.333-85.333c46.933 0 85.333 38.4 85.333 85.333s-38.4 85.333-85.333 85.333z',
  ],
  'Forward': [
    'M964.267 477.867l-384-298.667c-12.8-8.533-29.867-12.8-46.933-4.267-12.8 8.533-21.333 21.333-21.333 38.4v597.333c0 17.067 8.533 29.867 25.6 38.4 4.267 4.267 12.8 4.267 17.067 4.267 8.533 0 17.067-4.267 25.6-8.533l384-298.667c8.533-8.533 17.067-21.333 17.067-34.133s-4.267-25.6-17.067-34.133zM597.333 725.333v-426.667l273.067 213.333-273.067 213.333z',
    'M110.933 179.2c-12.8-8.533-29.867-12.8-42.667-4.267-17.067 8.533-25.6 21.333-25.6 38.4v597.333c0 17.067 8.533 29.867 25.6 38.4 4.267 4.267 12.8 4.267 17.067 4.267 8.533 0 17.067-4.267 25.6-8.533l384-298.667c8.533-8.533 17.067-21.333 17.067-34.133s-4.267-25.6-17.067-34.133l-384-298.667zM128 725.333v-426.667l273.067 213.333-273.067 213.333z',
  ],
  'Github': [
    'M960 362.667c0-64-21.333-119.467-59.733-170.667 12.8-55.467 8.533-115.2-12.8-166.4-4.267-12.8-12.8-21.333-25.6-25.6-17.067-4.267-72.533-12.8-187.733 59.733-93.867-21.333-192-21.333-281.6 0-115.2-72.533-170.667-64-187.733-59.733-12.8 4.267-21.333 12.8-25.6 25.6-25.6 55.467-29.867 110.933-12.8 166.4-38.4 51.2-59.733 110.933-59.733 170.667 0 230.4 128 302.933 247.467 328.533-8.533 29.867-12.8 55.467-12.8 81.067v4.267c-89.6 17.067-119.467-17.067-153.6-64-21.333-29.867-46.933-64-93.867-72.533-21.333-4.267-46.933 8.533-51.2 29.867s8.533 46.933 29.867 51.2c12.8 4.267 29.867 21.333 46.933 42.667 38.4 51.2 93.867 119.467 221.867 102.4v72.533c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-123.733c0 0 0-4.267 0-4.267v-38.4c0-29.867 8.533-55.467 29.867-76.8 12.8-12.8 17.067-29.867 8.533-42.667-4.267-17.067-17.067-25.6-34.133-29.867-123.733-17.067-238.933-55.467-238.933-256 0-51.2 17.067-93.867 51.2-132.267 12.8-12.8 12.8-29.867 8.533-42.667-12.8-38.4-12.8-72.533-4.267-106.667 21.333 4.267 59.733 17.067 110.933 55.467 12.8 8.533 25.6 8.533 38.4 4.267 89.6-25.6 187.733-25.6 277.333 0 12.8 4.267 25.6 0 34.133-4.267 55.467-38.4 93.867-51.2 110.933-55.467 8.533 34.133 8.533 68.267-4.267 102.4-4.267 17.067-4.267 34.133 8.533 42.667 34.133 34.133 51.2 81.067 51.2 132.267 0 200.533-115.2 243.2-238.933 256-17.067 0-29.867 12.8-34.133 29.867s0 34.133 8.533 42.667c21.333 21.333 29.867 51.2 29.867 81.067v166.4c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-162.133c4.267-29.867 0-55.467-12.8-81.067 102.4-21.333 247.467-89.6 247.467-332.8z',
  ],
  'File': [
    'M891.733 366.933c-4.267-4.267-4.267-8.533-8.533-12.8l-298.667-298.667c-4.267-4.267-8.533-8.533-12.8-8.533-4.267-4.267-12.8-4.267-17.067-4.267h-298.667c-72.533 0-128 55.467-128 128v682.667c0 72.533 55.467 128 128 128h512c72.533 0 128-55.467 128-128v-469.333c0-4.267 0-12.8-4.267-17.067zM597.333 187.733l153.6 153.6h-153.6v-153.6zM768 896h-512c-25.6 0-42.667-17.067-42.667-42.667v-682.667c0-25.6 17.067-42.667 42.667-42.667h256v256c0 25.6 17.067 42.667 42.667 42.667h256v426.667c0 25.6-17.067 42.667-42.667 42.667z',
  ],
  'Info': [
    'M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM512 384c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667z',
  ],
  'Letter': [
    'M853.333 128h-682.667c-72.533 0-128 55.467-128 128v512c0 72.533 55.467 128 128 128h682.667c72.533 0 128-55.467 128-128v-512c0-72.533-55.467-128-128-128zM170.667 213.333h682.667c17.067 0 29.867 8.533 38.4 25.6l-379.733 264.533-379.733-264.533c8.533-17.067 21.333-25.6 38.4-25.6zM853.333 810.667h-682.667c-25.6 0-42.667-17.067-42.667-42.667v-430.933l358.4 251.733c8.533 4.267 17.067 8.533 25.6 8.533s17.067-4.267 25.6-8.533l358.4-251.733v430.933c0 25.6-17.067 42.667-42.667 42.667z',
  ],
  'Maximize': [
    'M341.333 853.333h-128c-25.6 0-42.667-17.067-42.667-42.667v-128c0-25.6-17.067-42.667-42.667-42.667s-42.667 17.067-42.667 42.667v128c0 72.533 55.467 128 128 128h128c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667z',
    'M341.333 85.333h-128c-72.533 0-128 55.467-128 128v128c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-128c0-25.6 17.067-42.667 42.667-42.667h128c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667z',
    'M810.667 85.333h-128c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h128c25.6 0 42.667 17.067 42.667 42.667v128c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-128c0-72.533-55.467-128-128-128z',
    'M896 640c-25.6 0-42.667 17.067-42.667 42.667v128c0 25.6-17.067 42.667-42.667 42.667h-128c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h128c72.533 0 128-55.467 128-128v-128c0-25.6-17.067-42.667-42.667-42.667z',
  ],
  'Menu': [
    'M896 469.333h-768c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h768c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667z',
    'M128 298.667h768c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667h-768c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667z',
    'M896 725.333h-768c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h768c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667z',
  ],
  'Minimize': [
    'M256 640h-128c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h128c25.6 0 42.667 17.067 42.667 42.667v128c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-128c0-72.533-55.467-128-128-128z',
    'M768 384h128c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667h-128c-25.6 0-42.667-17.067-42.667-42.667v-128c0-25.6-17.067-42.667-42.667-42.667s-42.667 17.067-42.667 42.667v128c0 72.533 55.467 128 128 128z',
    'M896 640h-128c-72.533 0-128 55.467-128 128v128c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-128c0-25.6 17.067-42.667 42.667-42.667h128c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667z',
    'M341.333 85.333c-25.6 0-42.667 17.067-42.667 42.667v128c0 25.6-17.067 42.667-42.667 42.667h-128c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h128c72.533 0 128-55.467 128-128v-128c0-25.6-17.067-42.667-42.667-42.667z',
  ],
  'Moon': [
    'M917.333 507.733c-12.8-8.533-34.133-8.533-46.933 4.267-89.6 68.267-213.333 68.267-302.933 0-115.2-85.333-140.8-243.2-55.467-358.4 8.533-12.8 12.8-29.867 4.267-46.933-8.533-12.8-25.6-21.333-42.667-21.333-204.8 17.067-366.933 179.2-384 384-21.333 234.667 149.333 443.733 384 465.067 12.8 0 25.6 0 38.4 0 98.133 0 196.267-34.133 273.067-98.133 89.6-72.533 140.8-174.933 153.6-290.133 0-12.8-8.533-29.867-21.333-38.4zM733.867 772.267c-68.267 59.733-157.867 85.333-247.467 76.8-187.733-17.067-324.267-183.467-307.2-371.2 12.8-132.267 102.4-247.467 221.867-290.133-51.2 136.533-4.267 298.667 119.467 392.533 93.867 68.267 213.333 85.333 320 46.933-25.6 55.467-59.733 106.667-106.667 145.067z',
  ],
  'Pause': [
    'M426.667 128h-170.667c-25.6 0-42.667 17.067-42.667 42.667v682.667c0 25.6 17.067 42.667 42.667 42.667h170.667c25.6 0 42.667-17.067 42.667-42.667v-682.667c0-25.6-17.067-42.667-42.667-42.667zM384 810.667h-85.333v-597.333h85.333v597.333z',
    'M768 128h-170.667c-25.6 0-42.667 17.067-42.667 42.667v682.667c0 25.6 17.067 42.667 42.667 42.667h170.667c25.6 0 42.667-17.067 42.667-42.667v-682.667c0-25.6-17.067-42.667-42.667-42.667zM725.333 810.667h-85.333v-597.333h85.333v597.333z',
  ],
  'Pencil': [
    'M925.867 311.467l-213.333-213.333c-17.067-17.067-42.667-17.067-59.733 0l-554.667 554.667c-8.533 8.533-12.8 17.067-12.8 29.867v213.333c0 25.6 17.067 42.667 42.667 42.667h213.333c12.8 0 21.333-4.267 29.867-12.8l554.667-554.667c17.067-17.067 17.067-42.667 0-59.733zM324.267 853.333h-153.6v-153.6l512-512 153.6 153.6-512 512z',
  ],
  'Play': [
    'M832 477.867l-597.333-384c-12.8-8.533-29.867-8.533-42.667 0-12.8 4.267-21.333 17.067-21.333 34.133v768c0 17.067 8.533 29.867 21.333 38.4 8.533 4.267 12.8 4.267 21.333 4.267s17.067-4.267 21.333-8.533l597.333-384c12.8-8.533 21.333-21.333 21.333-34.133s-8.533-29.867-21.333-34.133zM256 819.2v-614.4l477.867 307.2-477.867 307.2z',
  ],
  'QuestionMark': [
    'M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM512 896c-213.333 0-384-170.667-384-384s170.667-384 384-384c213.333 0 384 170.667 384 384s-170.667 384-384 384z',
    'M563.2 264.533c-89.6-29.867-187.733 17.067-217.6 102.4-4.267 25.6 4.267 51.2 29.867 55.467 21.333 8.533 46.933-4.267 55.467-25.6 17.067-42.667 64-68.267 110.933-51.2 34.133 12.8 55.467 42.667 55.467 81.067 0 42.667-72.533 76.8-98.133 89.6-21.333 8.533-34.133 29.867-25.6 55.467 4.267 17.067 21.333 29.867 38.4 29.867 4.267 0 8.533 0 12.8-4.267 17.067-4.267 157.867-55.467 157.867-166.4-4.267-76.8-51.2-140.8-119.467-166.4z',
    'M482.133 695.467c-8.533 8.533-12.8 17.067-12.8 29.867s4.267 21.333 12.8 29.867c8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8c8.533-8.533 12.8-21.333 12.8-29.867s-4.267-21.333-12.8-29.867c-17.067-17.067-42.667-17.067-59.733 0z',
  ],
  'Redo': [
    'M1024 430.933c0 0 0-4.267 0-4.267v-256c0-25.6-17.067-42.667-42.667-42.667s-42.667 17.067-42.667 42.667v157.867l-123.733-119.467c-42.667-42.667-98.133-81.067-157.867-102.4-226.133-76.8-469.333 42.667-546.133 264.533s38.4 465.067 260.267 546.133c46.933 12.8 93.867 21.333 140.8 21.333 174.933 0 341.333-110.933 401.067-285.867 8.533-21.333-4.267-46.933-25.6-55.467s-46.933 4.267-55.467 25.6c-64 179.2-256 268.8-435.2 209.067-179.2-64-268.8-256-209.067-435.2 64-174.933 260.267-268.8 439.467-204.8 46.933 17.067 93.867 42.667 128 81.067l119.467 110.933h-149.333c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h256c0 0 0 0 0 0 4.267 0 8.533 0 8.533-4.267 0 0 4.267 0 4.267 0s4.267-4.267 4.267-4.267c4.267 0 8.533-4.267 8.533-8.533 0 0 0 0 0 0s0-4.267 4.267-4.267c0-4.267 4.267-4.267 4.267-8.533 8.533-0 8.533-4.267 8.533-8.533z',
  ],
  'Refresh': [
    'M887.467 601.6c-21.333-8.533-46.933 4.267-55.467 25.6-17.067 46.933-42.667 93.867-81.067 128-59.733 64-149.333 98.133-238.933 98.133 0 0 0 0 0 0-89.6 0-174.933-34.133-243.2-102.4l-119.467-110.933h149.333c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667h-256c0 0 0 0 0 0-4.267 0-8.533 0-8.533 4.267 0 0-4.267 0-4.267 0s-4.267 0-4.267 4.267c-4.267 0-8.533 4.267-8.533 8.533 0 0 0 0 0 0s0 4.267-4.267 4.267c0 4.267-4.267 4.267-4.267 8.533s0 4.267 0 8.533c0 0 0 4.267 0 4.267v256c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-157.867l123.733 119.467c72.533 81.067 179.2 123.733 294.4 123.733 0 0 0 0 0 0 115.2 0 221.867-42.667 302.933-123.733 42.667-42.667 81.067-98.133 102.4-157.867 4.267-25.6-8.533-51.2-29.867-55.467z',
    'M1024 430.933c0 0 0-4.267 0-4.267v-256c0-25.6-17.067-42.667-42.667-42.667s-42.667 17.067-42.667 42.667v157.867l-123.733-119.467c-42.667-42.667-98.133-81.067-157.867-102.4-110.933-34.133-226.133-29.867-328.533 21.333-102.4 46.933-179.2 132.267-217.6 243.2-8.533 21.333 4.267 46.933 25.6 51.2 21.333 8.533 46.933-4.267 55.467-25.6 29.867-85.333 93.867-153.6 174.933-196.267 81.067-38.4 174.933-42.667 260.267-12.8 46.933 17.067 93.867 42.667 128 81.067l119.467 115.2h-149.333c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h256c4.267 0 12.8 0 17.067-4.267 0 0 0 0 0 0 4.267-4.267 8.533-4.267 12.8-8.533 0 0 0 0 0 0s0-4.267 4.267-4.267c0-4.267 4.267-4.267 4.267-8.533 4.267-4.267 4.267-8.533 4.267-12.8z',
  ],
  'Save': [
    'M925.867 311.467l-213.333-213.333c-8.533-8.533-17.067-12.8-29.867-12.8h-469.333c-72.533 0-128 55.467-128 128v597.333c0 72.533 55.467 128 128 128h597.333c72.533 0 128-55.467 128-128v-469.333c0-12.8-4.267-21.333-12.8-29.867zM682.667 853.333h-341.333v-256h341.333v256zM853.333 810.667c0 25.6-17.067 42.667-42.667 42.667h-42.667v-298.667c0-25.6-17.067-42.667-42.667-42.667h-426.667c-25.6 0-42.667 17.067-42.667 42.667v298.667h-42.667c-25.6 0-42.667-17.067-42.667-42.667v-597.333c0-25.6 17.067-42.667 42.667-42.667h42.667v170.667c0 25.6 17.067 42.667 42.667 42.667h341.333c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667h-298.667v-128h324.267l187.733 187.733v452.267z',
  ],
  'Shuffle': [
    'M200.832 883.499l652.501-652.501v110.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-213.333c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-213.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h110.336l-652.501 652.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM609.835 670.165l183.168 183.168h-110.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h213.333c5.547 0 11.136-1.067 16.341-3.243s9.899-5.333 13.824-9.259c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341v-213.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v110.336l-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM140.501 200.832l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z',
  ],
  'Square': [
    'M810.667 85.333h-597.333c-72.533 0-128 55.467-128 128v597.333c0 72.533 55.467 128 128 128h597.333c72.533 0 128-55.467 128-128v-597.333c0-72.533-55.467-128-128-128zM853.333 810.667c0 25.6-17.067 42.667-42.667 42.667h-597.333c-25.6 0-42.667-17.067-42.667-42.667v-597.333c0-25.6 17.067-42.667 42.667-42.667h597.333c25.6 0 42.667 17.067 42.667 42.667v597.333z',
  ],
  'Star': [
    'M981.333 384c-4.267-17.067-17.067-25.6-34.133-29.867l-273.067-38.4-123.733-247.467c-12.8-29.867-64-29.867-76.8 0l-123.733 243.2-268.8 42.667c-17.067 0-29.867 12.8-38.4 29.867-4.267 17.067 0 34.133 12.8 42.667l196.267 192-46.933 273.067c-4.267 17.067 4.267 34.133 17.067 42.667s29.867 12.8 46.933 4.267l243.2-128 243.2 128c8.533 0 12.8 0 21.333 0s17.067-4.267 25.6-8.533c12.8-8.533 21.333-25.6 17.067-42.667l-46.933-273.067 196.267-192c12.8-8.533 17.067-25.6 12.8-38.4zM695.467 571.733c-8.533 12.8-12.8 25.6-12.8 38.4l34.133 209.067-187.733-98.133c-12.8-8.533-25.6-8.533-38.4 0l-187.733 98.133 38.4-209.067c0-12.8-4.267-25.6-12.8-38.4l-153.6-145.067 209.067-29.867c12.8 0 25.6-12.8 34.133-21.333l93.867-192 93.867 187.733c4.267 12.8 17.067 21.333 34.133 21.333l209.067 29.867-153.6 149.333z',
  ],
  'Sun': [
    'M512 256c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256zM512 682.667c-93.867 0-170.667-76.8-170.667-170.667s76.8-170.667 170.667-170.667c93.867 0 170.667 76.8 170.667 170.667s-76.8 170.667-170.667 170.667z',
    'M512 170.667c25.6 0 42.667-17.067 42.667-42.667v-85.333c0-25.6-17.067-42.667-42.667-42.667s-42.667 17.067-42.667 42.667v85.333c0 25.6 17.067 42.667 42.667 42.667z',
    'M512 853.333c-25.6 0-42.667 17.067-42.667 42.667v85.333c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-85.333c0-25.6-17.067-42.667-42.667-42.667z',
    'M209.067 268.8c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733l-59.733-59.733c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l59.733 59.733z',
    'M814.933 755.2c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l59.733 59.733c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733l-59.733-59.733z',
    'M170.667 512c0-25.6-17.067-42.667-42.667-42.667h-85.333c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h85.333c25.6 0 42.667-17.067 42.667-42.667z',
    'M981.333 469.333h-85.333c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h85.333c25.6 0 42.667-17.067 42.667-42.667s-17.067-42.667-42.667-42.667z',
    'M209.067 755.2l-59.733 59.733c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8l59.733-59.733c17.067-17.067 17.067-42.667 0-59.733s-42.667-17.067-59.733 0z',
    'M785.067 281.6c12.8 0 21.333-4.267 29.867-12.8l59.733-59.733c17.067-17.067 17.067-42.667 0-59.733s-42.667-17.067-59.733 0l-59.733 59.733c-17.067 17.067-17.067 42.667 0 59.733 4.267 8.533 17.067 12.8 29.867 12.8z',
  ],
  'Terminal': [
    'M200.832 755.499l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM512 853.333h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-341.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z',
  ],
  'Triangle': [
    'M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c2.987 5.12 5.077 11.435 5.461 18.517-0.64 15.701-5.077 25.216-12.075 32.384-7.68 7.851-18.219 12.715-29.568 12.843l-722.645-0.043c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264z',
  ],
  'Twitter': [
    'M1006.933 93.867c-12.8-8.533-34.133-8.533-46.933 0-29.867 21.333-64 38.4-98.133 51.2-85.333-76.8-217.6-81.067-307.2-4.267-55.467 46.933-85.333 110.933-85.333 179.2-123.733-8.533-234.667-72.533-307.2-174.933-8.533-12.8-21.333-17.067-38.4-17.067s-29.867 12.8-34.133 25.6c-4.267 4.267-46.933 106.667-42.667 230.4 4.267 106.667 46.933 243.2 204.8 341.333-64 29.867-136.533 42.667-209.067 42.667-17.067 0-38.4 12.8-42.667 29.867s4.267 38.4 21.333 46.933c106.667 59.733 221.867 89.6 328.533 89.6s209.067-25.6 302.933-81.067c183.467-102.4 285.867-298.667 285.867-533.333 0-8.533 0-12.8 0-21.333 42.667-46.933 72.533-102.4 85.333-162.133 4.267-17.067-4.267-34.133-17.067-42.667zM861.867 256c-8.533 8.533-12.8 25.6-12.8 38.4 4.267 8.533 4.267 17.067 4.267 25.6 0 204.8-89.6 371.2-243.2 460.8-119.467 68.267-260.267 85.333-401.067 51.2 55.467-17.067 106.667-38.4 153.6-72.533 17.067-8.533 21.333-21.333 21.333-38.4s-12.8-29.867-25.6-34.133c-247.467-110.933-238.933-320-213.333-426.667 93.867 93.867 226.133 149.333 366.933 145.067 21.333 0 42.667-21.333 42.667-42.667v-42.667c0-42.667 17.067-85.333 51.2-115.2 59.733-55.467 157.867-46.933 209.067 12.8 12.8 12.8 29.867 17.067 42.667 12.8 8.533-4.267 21.333-4.267 29.867-8.533-8.533 12.8-17.067 21.333-25.6 34.133z',
  ],
  'Undo': [
    'M913.067 371.2c-38.4-106.667-115.2-192-217.6-243.2s-217.6-55.467-324.267-17.067c-59.733 21.333-115.2 55.467-157.867 98.133l-128 119.467v-157.867c0-25.6-17.067-42.667-42.667-42.667s-42.667 17.067-42.667 42.667v256c0 0 0 4.267 0 4.267 0 4.267 0 8.533 0 8.533 0 4.267 4.267 4.267 4.267 8.533 0 0 0 4.267 4.267 4.267 0 0 0 0 0 0 4.267 4.267 4.267 4.267 8.533 4.267 0 0 4.267 4.267 4.267 4.267s4.267 0 4.267 0 8.533 0 8.533 0c0 0 0 0 0 0h256c25.6 0 42.667-17.067 42.667-42.667s-8.533-34.133-34.133-34.133h-149.333l119.467-115.2c34.133-34.133 81.067-64 128-81.067 85.333-29.867 179.2-25.6 260.267 12.8s145.067 106.667 174.933 196.267c29.867 85.333 25.6 179.2-12.8 260.267s-106.667 145.067-196.267 174.933c-179.2 64-371.2-29.867-435.2-209.067-8.533-21.333-34.133-34.133-55.467-25.6s-34.133 34.133-25.6 55.467c64 174.933 230.4 285.867 405.333 285.867 46.933 0 93.867-8.533 140.8-25.6 221.867-76.8 341.333-320 260.267-541.867z',
  ],
  'Water': [
    'M785.067 324.267l-243.2-238.933c-8.533-8.533-17.067-12.8-29.867-12.8v0c-12.8 0-21.333 4.267-29.867 12.8l-238.933 238.933c0 0 0 0 0 0-76.8 72.533-115.2 170.667-115.2 273.067s38.4 200.533 110.933 273.067c72.533 72.533 170.667 110.933 273.067 110.933 0 0 0 0 0 0 102.4 0 200.533-38.4 273.067-110.933 149.333-149.333 149.333-392.533 0-546.133zM725.333 810.667c-59.733 55.467-132.267 85.333-213.333 85.333 0 0 0 0 0 0-81.067 0-153.6-29.867-209.067-85.333-59.733-59.733-89.6-132.267-89.6-213.333s29.867-153.6 85.333-209.067c0 0 0 0 0 0l209.067-213.333 213.333 213.333c119.467 115.2 119.467 302.933 4.267 422.4z',
  ],
};

export interface IconProps extends BaseProps {
  /** Name of the icon to be displayed */
  name: TypeIcon;
  /** Size to be used for with and height of the icon */
  size: string;
  /** Spins the Icon, by the given speed reference. */
  spin?: 'slow' | 'base' | 'fast';
}

const Icon: React.RefForwardingComponent<SVGSVGElement, Attributes<SVGSVGElement, IconProps>> = (props, ref) => {
  const { name, size, spin, ...rest } = props;
  const classes = classnames('Icon', {
    [`Icon--spin-${spin}`]: spin,
  });

  if (!IconPathMap[name]) {
    return null;
  }

  return (
    <Base { ...rest }
        className={ classes }
        height={ size }
        ref={ ref }
        tag="svg"
        viewBox="0 0 1024 1024"
        width={ size }>
      { IconPathMap[name].map((d, i) => <path d={ d } key={ i } />) }
    </Base>
  );
};

export default React.forwardRef(Icon);
