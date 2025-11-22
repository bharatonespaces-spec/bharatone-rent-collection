import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, 
  IndianRupee, 
  Calendar, 
  Phone, 
  Search, 
  Menu, 
  LogOut, 
  Bell, 
…          className={`flex flex-col items-center text-xs ${activeTab === 'tenants' ? 'text-blue-700 font-bold' : 'text-gray-400'} ${userRole === 'shankar' ? 'hidden' : ''}`}
        >
          <Users size={20} className="mb-1" />
          All Tenants
        </button>
      </div>
    </div>
  );
}
